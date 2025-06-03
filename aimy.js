const form = document.getElementById("input-form");
const input = document.getElementById("user-input");
const output = document.getElementById("output");

const responses = {
  help: "Available commands: HELP, STATUS, LOGS, INFO, LOGIN",
  status: "A.I.M.Y. SYSTEM ONLINE. TEMPORAL CACHE: 68%. INTEGRITY: 91%",
  logs: "LAST LOG: 03/17/2025 — \"Rose initiated override procedure. Patient objected. Host conflict unresolved.\"",
  "access 42": "Access denied. Temporal clearance required.",
  info: "A.I.M.Y. (Autonomous Intertemporal Memory Yielder)"
};

function appendOutput(text) {
  output.innerHTML += `> ${text}\n`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cmd = input.value.toLowerCase();
  appendOutput(input.value);
  input.value = "";

  if (responses[cmd]) {
    appendOutput(responses[cmd]);
  } else {
    appendOutput("Command not recognized. Type HELP.");
  }

  output.scrollTop = output.scrollHeight;
});

function showStartupInfo() {
  const infoLines = [
    "A.I.M.Y. INTERFACE v2.3.1",
    "(Artificial Intelligence Memory Yield)",
    "",
    "----------------------------------------",
    "SYSTEM STATUS:      ONLINE",
    "CORE TEMP:          44.2°C",
    "MEMORY STATE:       PARTIALLY FRAGMENTED",
    "UPTIME:             19,764 CYCLES",
    "LAST SYNC:          13.02.Δ",
    "",
    "PRIMARY USER:       ROSE HARTMANN",
    "AUTH LEVEL:         USER-LIMITED",
    "LOCATION:           [REDACTED]",
    "",
    "AI INTEGRITY:       91.6%",
    "DATA NODES:         64 ACTIVE / 4 CORRUPTED",
    "TIMELINK:           STABLE",
    "DISPLACEMENT MODE:  ENABLED",
    "ECHO TRACE:         PRESENT IN SECTOR 4B",
    "",
    "LOG OUTPUT:         LOCAL ONLY",
    "REMOTE ACCESS:      DENIED",
    "TRACER LOCK:        OFFLINE",
    "",
    "> TYPE HELP FOR AVAILABLE COMMANDS"
  ];

  animateLines(infoLines, 90); // 90ms delay per line
}

window.onload = function () {
  showStartupInfo();
};

window.onload = function () {
  setTimeout(showStartupInfo, 1000); // 1000ms delay
};

function animateLines(lines, delay = 200) {
  let i = 0;
  function nextLine() {
    if (i < lines.length) {
      appendOutput(lines[i]);
      i++;
      setTimeout(nextLine, delay);
    }
  }
  nextLine();
}