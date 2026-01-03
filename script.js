function generatePoem(event) {
    event.preventDefault();

    let poemElement = document.getElementById("poem");
    poemElement.classList.add("poem");
    new Typewriter('#poem', {
        strings: "Paramètre fictif",
        autoStart: true,
        delay: 15,
        cursor: "",
    });
}

let poemGeneratorElement = document.getElementById("poem-generator-form");
poemGeneratorElement.addEventListener("submit", generatePoem);