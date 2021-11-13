const button = document.querySelector("button");
const input = document.querySelector("input");
const imageResults = document.querySelector("#shows");


const makeImages = async function (keywords) {
    config = {
        params: {
            q: keywords
        }
    }

    try {
        while (imageResults.firstChild) {
            imageResults.removeChild(imageResults.firstChild);
        }
        const result = await axios.get("http://api.tvmaze.com/search/shows", config);
        for (output of result.data) {
            const img = document.createElement("img");
            img.src = output.show.image.medium;
            imageResults.append(img);

        }
    } catch (e) {
        console.log("an error has occured")
    }
}


const getInput = async (e) => {
    e.preventDefault();
    let value = input.value;
    input.value = "";
    await makeImages(value);
}

button.addEventListener("click", getInput);


