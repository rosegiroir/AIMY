const form = document.getElementById("input-form");
const input = document.getElementById("user-input");
const output = document.getElementById("output");

const responses = {
  help: "Available commands: HELP, STATUS, LOGS, INFO, LOGIN",
  status: "A.I.M.Y. SYSTEM ONLINE. TEMPORAL CACHE: 68%. INTEGRITY: 91%",
  logs: "LAST LOG: 03/17/2025 — \"Rose initiated override procedure. Patient objected. Host conflict unresolved.\"",
  "access 42": "Access denied. Temporal clearance required.",
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
