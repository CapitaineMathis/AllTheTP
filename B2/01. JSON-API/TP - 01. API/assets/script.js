class ApiAcces {
    static async WC_publics(rows = 25) {
        const apiPath = `https://opendata.agglo-larochelle.fr/d4c/api/records/1.0/search/?dataset=hygiene_et_sante_wc_publics&rows=${rows}`;
        const reponse = await fetch(apiPath);
        if (!reponse.ok) {
            throw new Error(`${reponse.status}`);
        }
        const data = await reponse.json()
        return data.records;
    }

    static async Hotspot_Wifi(rows = 30) {
        const apiPath = `https://opendata.agglo-larochelle.fr/d4c/api/records/1.0/search/?dataset=telecommunication_hotspot_wifi_ville_de_la_rochelle&rows=${rows}`;
        const reponse = await fetch(apiPath);
        if (!reponse.ok) {
            throw new Error(`${reponse.status}`);
        }
        const data = await reponse.json()
        return data.records
    }
}



class Map {
    constructor() {
        this.map = L.map('map').setView([46.1603, -1.1511], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
    }

    addMarker(lat, lon, text, icon){
        L.marker([lat, lon], { icon: icon })
            .addTo(this.map)
            .bindPopup(`${text}`);
    }
}

class Table {
    constructor(listCols, container = document.body) {
        this.listCols = listCols;
        this.container = container;

        this.table = document.createElement("table");
        this.table.border = "1";

        this.Header();
        this.body = document.createElement("body");
        this.table.appendChild(this.body);

        this.container.appendChild(this.table);
    }

    Header() {
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");

        this.listCols.forEach(colName => {
            const th = document.createElement("th");
            th.textContent = colName;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        this.table.appendChild(thead);
    }

    addRow(valuesList) {
        const row = document.createElement("tr");

        valuesList.forEach(val => {
            const td = document.createElement("td");
            td.textContent = val ?? "";
            row.appendChild(td);
        });

        this.body.appendChild(row);
    }
}

async function init() {
    const WC_publics = await ApiAcces.WC_publics();
    const Hotspot_Wifi = await ApiAcces.Hotspot_Wifi();

    const map = new Map();
    
    const txt1 = document.createElement("h2");
    txt1.textContent = "WC public";
    document.body.appendChild(txt1);

    const tabWC = new Table(["ID", "Lieu", "Latitude", "Longitude"]);

    const txt2 = document.createElement("h2");
    txt2.textContent = "Hot Spot Wifi";
    document.body.appendChild(txt2);

    const tabHS = new Table(["ID", "Lieu", "Latitude", "Longitude"]);

    const wcIcon = L.icon({
        iconUrl: 'assets/svg/wc.svg',
        iconSize: [16, 16],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    const wifiIcon = L.icon({
        iconUrl: 'assets/svg/wifi.svg',
        iconSize: [16, 16],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    WC_publics.forEach(item => {
        const [lat, lon] = item.fields.geo_point_2d.split(',').map(Number);
        map.addMarker(lat, lon, `<b>WC public : <a href="https://waze.com/ul?ll=${lat},${lon}&navigate=yes">Wase</a></b>`, wcIcon)
        tabWC.addRow([
            item.recordid,
            item.fields.emplacement || "None",
            lat,
            lon
        ]);
        
    });

    console.log(Hotspot_Wifi)
    Hotspot_Wifi.forEach(item => {
        const [lat, lon] = item.fields.coordinates.split(',').map(Number);
        map.addMarker(lat, lon, `<b>Bornes Wifi : <a href="https://waze.com/ul?ll=${lat},${lon}&navigate=yes">Wase</a></b>`, wifiIcon)
        tabHS.addRow([
            item.recordid,
            item.fields.lieu || "None",
            lat,
            lon
        ]);
    });


    
    
}


init();







/*
fetch('./datas/data.json')
    .then(
        (response) => response.json()
    )
    .then(
        (data) => {
            useTheData(data)
            showMap(data)
        }
    );



function useTheData(data) {
    const table = document.createElement("table");
    table.border = "5";
    const headerRow = document.createElement("tr");

    ["id", "lieu", "Latitude", "Longitude"].forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);


    data.forEach(item => {
        const line = [
            item.fields.identifiant,
            item.fields.lieu,
            item.fields.coordinates[0],
            item.fields.coordinates[1]
        ];

        const row = document.createElement("tr");

        line.forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        table.appendChild(row);
    });

    document.body.appendChild(table);
}

function showMap(data) {
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    data.forEach(item => {
        L.marker([
            item.fields.coordinates[1],
            item.fields.coordinates[0]
        ]).addTo(map);
    });

    
}
*/