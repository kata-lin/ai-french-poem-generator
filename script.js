function displayPoem(response) {
    let poemElement = document.getElementById("poem");
    poemElement.classList.add("poem");

    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 15,
        cursor: "",
    });
};

function generatePoem(event) {
    event.preventDefault();

    let poemTopic = document.getElementById("poem-topic");
    let apiKey = "t9425412e35f60bab5f5aa66fa3o377c";
    let prompt = `Generate a French poem about ${poemTopic.value}`;
    let context = "You are a poet. Write a 4 line poem and separate each line with the <br> element. Sign your poem at the end with SheCodes AI using the <strong> element.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    axios.get(apiUrl).then(displayPoem);
};

let poemGeneratorForm = document.getElementById("poem-generator-form");
poemGeneratorForm.addEventListener("submit", generatePoem);