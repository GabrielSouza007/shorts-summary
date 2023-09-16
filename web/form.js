import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
    event.preventDefault()
    content.classList.add("placeholder")

    const videoURL = input.value

    if (!videoURL.includes("shorts")) {
        return content.textContent = "Esse vídeo não parece ser um shorts."
    }

    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?feature=share")
    console.log(videoID)

    content.textContent = "Obtendo o texto do vídeo..."

    const transcription = await server.get("/summary/" + videoID)

    content.textContent = "Realizando o resumo..."

    const summary = await server.post("/summary", {
        text: transcription.data.result,
    })

    content.textContent = transcription.data.result
    content.classList.remove("placeholder")
})