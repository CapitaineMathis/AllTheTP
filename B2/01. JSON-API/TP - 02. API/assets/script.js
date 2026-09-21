const API_PATH = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
const STORAGE_KEY = "saved_jokes";

// class home made for creating a table :)
// (with a litle help from AI but dont have the prompt)
class Table {
    constructor(listCols, container = document.body, style="") {
        this.listCols = listCols;
        this.container = container;

        this.wrapper = document.createElement("div");
        this.wrapper.className = "w-full overflow-x-auto max-h-[70vh] overflow-y-auto";

        this.table = document.createElement("table");
        this.table.className = `w-full border-collapse text-left text-sm text-gray-700 ${style}`;

        this.Header();

        this.body = document.createElement("tbody");
        this.body.className = "divide-y divide-gray-200 bg-white";

        this.table.appendChild(this.body);
        this.wrapper.appendChild(this.table);

        this.container.appendChild(this.wrapper);
    }

    Header() {
        const thead = document.createElement("thead");
        thead.className = "bg-gray-100 sticky top-0 z-10";

        const headerRow = document.createElement("tr");

        this.listCols.forEach(colName => {
            const th = document.createElement("th");
            th.textContent = colName;
            th.className = "px-4 py-3 font-semibold text-gray-900 border-b border-gray-300";
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        this.table.appendChild(thead);
    }

    addRow(valuesList) {
        const row = document.createElement("tr");
        row.className = "hover:bg-gray-50 transition-colors";

        valuesList.forEach(val => {
            const td = document.createElement("td");
            td.className = "px-4 py-3 border-b border-gray-200";

            if (val instanceof HTMLElement) {
                td.appendChild(val);
            } else {
                td.textContent = val ?? "";
            }

            row.appendChild(td);
        });

        this.body.appendChild(row);
        return row;
    }

    clear() {
        this.body.replaceChildren();
    }
}

// LocalStorage

function loadSavedJokes() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    return rawData ? JSON.parse(rawData) : [];
}

function saveJokes(jokes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
}

// API

async function GetaJoke(api) {
    const reponse = await fetch(api);
    if (!reponse.ok) {
        throw new Error(`${reponse.status}`);
    }
    const data = await reponse.json();

    const isTwoPart = data.type === "twopart";

    return {
        id: data.id ?? Date.now(),
        category: data.category,
        setup: isTwoPart ? data.setup : data.joke,
        delivery: isTwoPart ? data.delivery : "-"
    };
}

// Initialisation

async function init() {
    const NewJokeBtn = document.getElementById("NewJokeBtn");
    const table = new Table(["Catégorie", "Setup", "Delivery", "Action"], document.body, "mt-16");

    // get the joke in the localStorage
    let jokesList = loadSavedJokes();

    // function for the Delet button
    const createDeleteBtn = (jokeId) => {
        const btn = document.createElement("button");
        btn.textContent = "Supprimer";
        btn.className = "px-2.5 py-1 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded transition-colors cursor-pointer";

        btn.addEventListener("click", (e) => {
            // update the local storage
            jokesList = jokesList.filter(j => j.id !== jokeId);
            saveJokes(jokesList);

            // remove the row from the dom
            const row = e.target.closest("tr");
            if (row) row.remove();
        });

        return btn;
    };

    // show the joke in the Dom
    const renderJoke = (jokeObj) => {
        table.addRow([
            jokeObj.category,
            jokeObj.setup,
            jokeObj.delivery,
            createDeleteBtn(jokeObj.id)
        ]);
    };

    // Reload the data in the localStorage, if not fetch (get) a new joke
    if (jokesList.length > 0) {
        jokesList.forEach(joke => renderJoke(joke));
    } else {
        const firstJoke = await GetaJoke(API_PATH);
        jokesList.push(firstJoke);
        saveJokes(jokesList);
        renderJoke(firstJoke);
    }

    // Event for adding a new Joke
    NewJokeBtn.addEventListener("click", async () => {
        try {
            NewJokeBtn.disabled = true;
            const newJoke = await GetaJoke(API_PATH);
            
            jokesList.push(newJoke);
            saveJokes(jokesList);
            renderJoke(newJoke);
        } catch (err) {
            console.error("Error:", err);
        } finally {
            NewJokeBtn.disabled = false;
        }
    });
}

init();