import svgpath from "https://cdn.jsdelivr.net/npm/svgpath@2.6.0/+esm";

const htmlLang = document.documentElement.lang;
const ttsLang = getTTSLang(htmlLang);
let correctCount = 0;
const audioContext = new AudioContext();
const audioBufferCache = {};
loadAudio("modified", "/china-map-puzzle/mp3/decision50.mp3");
loadAudio("correct", "/china-map-puzzle/mp3/correct3.mp3");
loadAudio("correctAll", "/china-map-puzzle/mp3/correct1.mp3");
let ttsVoices = [];
loadVoices();
loadConfig();

function loadConfig() {
  if (localStorage.getItem("darkMode") == 1) {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

function toggleDarkMode() {
  if (localStorage.getItem("darkMode") == 1) {
    localStorage.setItem("darkMode", 0);
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    localStorage.setItem("darkMode", 1);
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
}

async function playAudio(name, volume) {
  const audioBuffer = await loadAudio(name, audioBufferCache[name]);
  const sourceNode = audioContext.createBufferSource();
  sourceNode.buffer = audioBuffer;
  if (volume) {
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    gainNode.connect(audioContext.destination);
    sourceNode.connect(gainNode);
    sourceNode.start();
  } else {
    sourceNode.connect(audioContext.destination);
    sourceNode.start();
  }
}

async function loadAudio(name, url) {
  if (audioBufferCache[name]) return audioBufferCache[name];
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  audioBufferCache[name] = audioBuffer;
  return audioBuffer;
}

function unlockAudio() {
  audioContext.resume();
}

function loadVoices() {
  // https://stackoverflow.com/questions/21513706/
  const allVoicesObtained = new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length !== 0) {
      resolve(voices);
    } else {
      let supported = false;
      speechSynthesis.addEventListener("voiceschanged", () => {
        supported = true;
        voices = speechSynthesis.getVoices();
        resolve(voices);
      });
      setTimeout(() => {
        if (!supported) {
          document.getElementById("noTTS").classList.remove("d-none");
        }
      }, 1000);
    }
  });
  allVoicesObtained.then((voices) => {
    ttsVoices = voices.filter((voice) => voice.lang == ttsLang);
  });
}

function speak(text) {
  speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.voice = ttsVoices[Math.floor(Math.random() * ttsVoices.length)];
  msg.lang = ttsLang;
  speechSynthesis.speak(msg);
  return msg;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getStateId(node) {
  const doc = map.contentDocument;
  const states = [...doc.querySelectorAll(".main")];
  return states.indexOf(node);
}

function movePathPoints(path, x, y) {
  path = path.cloneNode(true);
  const data = svgpath(path.getAttribute("d"));
  data.translate(-x, -y);
  path.setAttribute("d", data.toString());
  return path;
}

function movePolygonPoints(polygon, x, y) {
  polygon = polygon.cloneNode(true);
  const data = polygon.getAttribute("points").split(" ").map(Number);
  const points = data.map((p, i) => (i % 2 == 0) ? p - y : p - x);
  polygon.setAttribute("points", points.join(" "));
  return polygon;
}

function moveGroupPoints(g, x, y) {
  g = g.cloneNode(true);
  g.querySelectorAll("path, polygon").forEach((node) => {
    switch (node.tagName) {
      case "path":
        node.replaceWith(movePathPoints(node, x, y));
        break;
      case "polygon":
        node.replaceWith(movePolygonPoints(node, x, y));
        break;
    }
  });
  return g;
}

function movePoints(node, x, y) {
  switch (node.tagName) {
    case "path":
      return movePathPoints(node, x, y);
    case "polygon":
      return movePolygonPoints(node, x, y);
    case "g":
      return moveGroupPoints(node, x, y);
    default:
      throw new Error("not supported");
  }
}

function getPieceSvg(island, scale) {
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNamespace, "svg");
  const rect = island.getBBox();
  const { x, y, width, height } = rect;
  svg.setAttribute("width", width * scale);
  svg.setAttribute("height", height * scale);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("fill", "black");
  svg.setAttribute("opacity", "0.8");
  const piece = movePoints(island, x, y);
  svg.appendChild(piece);
  return svg;
}


function checkSpinnedPosition(island, wrapper, group) {
  let diff = Math.abs(group.angle + wrapper.angle);
  if (diff > 180) diff = 360 - diff;
  if (diff > angleThreshold) return false;
  const center = wrapper.getCenterPoint();
  const original = island.getBoundingClientRect();
  const centerX = original.left + original.width / 2;
  const centerY = original.top + original.height / 2;
  const originalScale = group.width / original.width;
  const scaleX = originalScale * group.scaleX * wrapper.scaleX;
  const scaleY = originalScale * group.scaleY * wrapper.scaleY;
  if (Math.abs(center.x - centerX) > positionThreshold) return false;
  if (Math.abs(center.y - centerY) > positionThreshold) return false;
  if (Math.abs(scaleX - 1) > scaleThreshold) return false;
  if (Math.abs(scaleY - 1) > scaleThreshold) return false;
  return true;
}

function checkPosition(island, rect) {
  const original = island.getBoundingClientRect();
  const width = rect.width * rect.scaleX;
  const height = rect.height * rect.scaleY;
  const left = rect.left - width / 2;
  const top = rect.top - height / 2;
  if (Math.abs(left - original.x) > positionThreshold) return false;
  if (Math.abs(top - original.y) > positionThreshold) return false;
  if (Math.abs(width - original.width) > positionThreshold) return false;
  if (Math.abs(height - original.height) > positionThreshold) return false;
  return true;
}

function addStateText(stateName) {
  clearTimeout(stateTimer);
  canvas.remove(stateText);
  const fontSize = canvas.width / stateTextLength;
  stateText = new fabric.Text(stateName, {
    fontSize: fontSize,
    fontFamily: "serif",
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue",
  });
  canvas.add(stateText);
  canvas.sendToBack(stateText);
  stateTimer = setTimeout(() => {
    canvas.remove(stateText);
  }, 2000);
}

function setMovableOption(group, course) {
  switch (course) {
    case 0:
    case 1:
    case 2:
      group.setControlsVisibility({
        bl: false,
        br: false,
        ml: false,
        mt: false,
        mr: false,
        mb: false,
        tl: false,
        tr: false,
        mtr: false,
      });
      group.hasBorders = false;
      break;
    case 3:
    case 4:
    case 5: {
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false,
      });
      break;
    }
    case 6:
    case 7:
    case 8: {
      group.setControlsVisibility({
        mtr: false,
      });
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height,
      });
      break;
    }
    case 9:
    case 10:
    case 11: {
      const width = (0.5 + Math.random()) * canvas.width / 10;
      const height = (0.5 + Math.random()) * canvas.height / 10;
      group.set({
        scaleX: width / group.width,
        scaleY: height / group.height,
      });
      const centerX = group.left + group.width / 2;
      const centerY = group.top + group.height / 2;
      group.set({
        originX: "center",
        originY: "center",
        left: centerX,
        top: centerY,
        angle: Math.random() * 360,
        selectable: false,
      });
      break;
    }
  }
}

function addControlRect(group, course) {
  group.setCoords();
  const rect = group.getBoundingRect();
  const rectLength = Math.max(rect.width, rect.height);
  const controlRect = new fabric.Rect({
    originX: "center",
    originY: "center",
    left: group.left,
    top: group.top,
    width: rectLength,
    height: rectLength,
    opacity: 0,
    selectable: false,
  });
  canvas.add(controlRect);

  const wrapper = new fabric.Group([controlRect, group], {
    originX: "center",
    originY: "center",
    width: rectLength,
    height: rectLength,
    opacity: group.opacity,
    transparentCorners: false,
    cornerStyle: "circle",
  });
  if (course < 9) {
    wrapper.setControlsVisibility({
      bl: false,
      br: false,
      ml: false,
      mt: false,
      mr: false,
      mb: false,
      tl: false,
      tr: false,
    });
  }
  canvas.add(wrapper);
  return wrapper;
}

function addScoreText() {
  const time = (((Date.now() - startTime) * 1000) / 1000000).toFixed(3);
  const text = `${time} sec!`;
  const fontSize = canvas.width / 8;
  scoreText = new fabric.Text(text, {
    fontSize: fontSize,
    left: canvas.width / 2,
    top: canvas.height / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    fill: "blue",
  });
  setTimeout(() => {
    canvas.add(scoreText);
    canvas.sendToBack(scoreText);
  }, 2000);
}

function setCorrectPiece(island) {
  island.setAttribute("fill", "violet");
  correctCount += 1;
  if (correctCount == stateNames.length) {
    playAudio("correctAll");
    addScoreText();
  } else {
    playAudio("correct");
  }
  const id = getStateId(island);
  const stateName = stateNames[id];
  addStateText(stateName);
  speak(stateName);
}

function adjustElementPosition(element) {
  const width = element.width * element.scaleX;
  const height = element.height * element.scaleY;
  const w2 = width / 2;
  const h2 = height / 2;
  if (element.left < w2) {
    element.set({ left: w2 });
  } else if (canvas.width < element.left + w2) {
    const maxLeft = canvas.width - w2;
    element.set({ left: maxLeft });
  }
  if (element.top < h2) {
    element.set({ top: h2 });
  } else if (canvas.height < element.top + h2) {
    const maxTop = canvas.height - h2;
    element.set({ top: maxTop });
  }
  element.setCoords();
}

function setPieceGuideEvent(island, group) {
  let lastTouchTime = 0;
  group.on("mousedown", (event) => {
    document.getElementById("guide").replaceChildren();
    const now = Date.now();
    if (now - lastTouchTime < 200) {
      const e = event.e;
      const touch = (e instanceof TouchEvent) ? e.touches[0] : e;
      const tx = touch.clientX;
      const ty = touch.clientY - 30;
      const id = getStateId(island);
      const stateName = stateNames[id];
      const html = `
        <div class="tooltip show" role="tooltip"
          style="position:absolute; inset:0px auto auto 0px; transform:translate(${tx}px,${ty}px);">
          <div class="tooltip-inner">${stateName}</div>
        </div>
      `;
      document.getElementById("guide").innerHTML = html;
    }
    lastTouchTime = now;
  });
}

function setMovable(island, svg, course) {
  new fabric.loadSVGFromString(svg.outerHTML, (objects, options) => {
    const group = fabric.util.groupSVGElements(objects, options);
    group.set({
      left: getRandomInt(0, canvas.width / 2),
      top: getRandomInt(0, canvas.height / 2),
    });
    group.set({
      left: group.left + group.width / 2,
      top: group.top + group.height / 2,
      originX: "center",
      originY: "center",
      transparentCorners: false,
      cornerStyle: "circle",
    });
    setMovableOption(group, course);
    canvas.add(group);

    if (group.selectable) {
      setPieceGuideEvent(island, group);
      group.on("modified", () => {
        playAudio("modified");
        if (checkPosition(island, group)) {
          canvas.remove(group);
          setCorrectPiece(island);
        } else {
          adjustElementPosition(group);
        }
      });
    } else {
      const wrapper = addControlRect(group, course);
      setPieceGuideEvent(island, wrapper);
      wrapper.on("modified", () => {
        playAudio("modified");
        group.set("angle", group.angle + wrapper.angle);
        group.setCoords();
        const rect = group.getBoundingRect();
        const rectLength = Math.max(rect.width, rect.height);
        wrapper.set({
          angle: 0,
          width: rectLength,
          height: rectLength,
        });
        if (checkSpinnedPosition(island, wrapper, group)) {
          wrapper.getObjects().forEach((obj) => {
            canvas.remove(obj);
          });
          canvas.remove(wrapper);
          setCorrectPiece(island);
        } else {
          adjustElementPosition(wrapper);
        }
      });
    }
  });
}

function getSVGScale(map, doc) {
  const svg = doc.querySelector("svg");
  const width = svg.getAttribute("viewBox").split(" ")[2];
  const rect = map.getBoundingClientRect();
  return rect.width / Number(width);
}

function shuffleSVG() {
  canvas.clear();
  const course = document.getElementById("courseOption").selectedIndex;
  const doc = map.contentDocument;
  const scale = getSVGScale(map, doc);
  const states = doc.querySelectorAll(".main");
  states.forEach((state) => {
    state.removeAttribute("fill");
    const svg = getPieceSvg(state, scale);
    setMovable(state, svg, course);
  });
  switch (course % 3) {
    case 0:
      states.forEach((state) => {
        state.setAttribute("fill", "#fefee4");
        state.setAttribute("stroke-width", 1);
      });
      break;
    case 1:
      states.forEach((state) => {
        state.setAttribute("fill", "#fefee4");
        state.setAttribute("stroke-width", 0);
      });
      break;
    case 2:
      states.forEach((state) => {
        state.setAttribute("fill", "none");
        state.setAttribute("stroke-width", 0);
      });
      break;
  }
}

function startGame() {
  if (!canvas) canvas = initCanvas();
  canvas.remove(scoreText);
  shuffleSVG();
  correctCount = 0;
  startTime = Date.now();
}

function initCanvas() {
  const rect = map.getBoundingClientRect();
  const canvas = new fabric.Canvas("canvas", {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  });
  canvas.selection = false;
  // canvas.on("before:selection:cleared", (event) => {
  //   adjustElementPosition(event.target);
  // });
  // canvas.on("selection:created", (event) => {
  //   if (event.selected.length > 1) {
  //     const selection = canvas.getActiveObject();
  //     selection.set({
  //       left: selection.left + selection.width / 2,
  //       top: selection.top + selection.height / 2,
  //       originX: "center",
  //       originY: "center",
  //     });
  //     selection.setControlsVisibility({
  //       bl: false,
  //       br: false,
  //       ml: false,
  //       mt: false,
  //       mr: false,
  //       mb: false,
  //       tl: false,
  //       tr: false,
  //       mtr: false,
  //     });
  //   }
  // });
  document.getElementById("canvas").parentNode.style.position = "absolute";
  return canvas;
}

function resizePieces(rect) {
  const scale = rect.width / canvas.getWidth();
  canvas.setDimensions({ width: rect.width, height: rect.height });
  canvas.getObjects().forEach((object) => {
    object.left *= scale;
    object.top *= scale;
    object.scaleX *= scale;
    object.scaleY *= scale;
    object.setCoords();
  });
}

function calcStateTextLength(lang, stateNames) {
  const max = Math.max(...stateNames.map((str) => str.length));
  switch (lang) {
    case "ja":
    case "zh":
      return max;
    case "en":
      // consider proportional font
      return Math.ceil(max / 1.5);
  }
}

function changeLang() {
  const langObj = document.getElementById("lang");
  const lang = langObj.options[langObj.selectedIndex].value;
  location.href = `/china-map-puzzle/${lang}/`;
}

function getTTSLang(htmlLang) {
  switch (htmlLang) {
    case "en":
      return "en-US";
    case "ja":
      return "ja-JP";
    case "zh":
      return "zh-CN";
  }
}

async function initStatesInfo(htmlLang) {
  const response = await fetch(`/china-map-puzzle/data/${htmlLang}.lst`);
  const text = await response.text();
  stateNames = text.trimEnd().split("\n");
  stateTextLength = calcStateTextLength(htmlLang, stateNames);
}

const map = document.getElementById("map");
const positionThreshold = 20;
const scaleThreshold = 0.3;
const angleThreshold = 20;
let canvas;
let stateNames;
let stateText;
let stateTextLength;
let stateTimer;
let startTime;
let scoreText;

initStatesInfo(htmlLang);

document.getElementById("startButton").onclick = startGame;
document.getElementById("toggleDarkMode").onclick = toggleDarkMode;
document.getElementById("lang").onchange = changeLang;
document.addEventListener("click", unlockAudio, {
  once: true,
  useCapture: true,
});
globalThis.addEventListener("resize", () => {
  const rect = map.getBoundingClientRect();
  resizePieces(rect);
  if (stateText) {
    stateText.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
    });
  }
  if (scoreText) {
    scoreText.set({
      left: canvas.width / 2,
      top: canvas.height / 2,
    });
  }
});
