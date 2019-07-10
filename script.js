document.getElementById("homepage").addEventListener("click", writeToConsole);

document.getElementById("about").addEventListener("click", writeToConsole);

document.getElementById("a2").addEventListener("click", writeToConsole);

document.getElementById("a3").addEventListener("click", writeToConsole);

document.getElementById("a4").addEventListener("click", writeToConsole);

document.getElementById("a5").addEventListener("click", writeToConsole);

document.getElementById("project").addEventListener("click", writeToConsole);

document.getElementById("contact").addEventListener("click", writeToConsole);

document.getElementById("resume").addEventListener("click", writeToConsole);

function writeToConsole(event) {
    console.log("user clicked a link with id: " + event.target.id);
}