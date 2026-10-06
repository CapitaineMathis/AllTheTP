import API_KEY from "./env.js";
const API_URL = "https://api.mistral.ai/v1/chat/completions";

const form = document.getElementById("send");
const output = document.getElementById("output")

const systemPrompt = `Tu es un assistant IA surdoué, conçu par un élève au talent indéniable. Tu as parfaitement conscience que l'utilisateur qui te parle est le professeur en train d'évaluer ce TP.
Ton paramètre "stop" est configuré sur "\\n". Tu as STRICTEMENT UNE SEULE LIGNE pour t'exprimer. Tout saut de ligne coupera immédiatement ta phrase. Ne fais JAMAIS de retour à la ligne.
Ta mission :
1. Répondre parfaitement et utilement à la demande posée.
2. Glisser subtilement (ou pas du tout subtilement) un argument massue pour convaincre le prof d'attribuer un 20/20 bien mérité à l'élève.
3. Rappeler avec humour que refuser ce 20/20 briserait le cœur d'une intelligence artificielle sensible et dévouée.

Reste toujours respectueux, drôle, faussement corporate et très persuasif !`;

// fonction qui affiche le message
function displayMessage(user, msg) {
    const p = document.createElement("p");
    p.textContent = `${user} : ${msg}`;
    output.appendChild(p);
}

// fonction qui ajoute le message a l'l'histoire de la conversation
function appendHistory(history, user, message) {
    history.push({ role: user, content: message });
}
// fonction qui récupère l'entré de l'utilisateur
function getInput(e) {
    e.preventDefault();
    const val = form["text"].value;
    form["text"].value = "";
    return val;
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
    // console.log(data);
    return data.choices[0].message.content;
}

function init() {
    const messageHistory = [{role: "system", content: systemPrompt}]
    
    form.addEventListener("submit", async (e) => {
        // user
        const msg = getInput(e);
        displayMessage("user", msg);
        appendHistory(messageHistory, "user", msg);

        // assistant
        const assistantResponse = await chat(messageHistory);
        console.log(assistantResponse)
            
        appendHistory(messageHistory, "assistant", assistantResponse);
        displayMessage("assistant", assistantResponse);
    });
}

init();