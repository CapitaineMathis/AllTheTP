import API_KEY from "./env.js";
const API_URL = "https://api.mistral.ai/v1/chat/completions";

const form = document.getElementById("send");
const output = document.getElementById("output")

function displayMessage(user, msg) {
    output.innerText += "\n";
}

async function getInput(e) {
    e.preventDefault();
    return form["test"].value;
}

async function chat(message) {
    let res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            "model": "ministral-3b-2512",
            "messages": message,
            "stop": ["\n"]
        })
    })
    const data = await res.json();
    console.log(data);
    return data.choices[0].message.content;
}

async function init() {
    const message = [
                {
                    "role": "user",
                    "content": "Who is the best French painter? Answer in one short sentence."
                }
            ]
    // const r = await chat(message);

    displayMessage("user", msg);
    const assistantResponce = await chat(msg);
    displayMessage("assistant", assistantResponce);

    console.log(assistantResponce)
}

init();