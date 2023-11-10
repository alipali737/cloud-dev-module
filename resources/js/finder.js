window.onload = loadTables()

function loadTables() {
    getPets()
    getWalkers()
}

async function fetchPetDetails() {
    const events = await fetch('https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod/pets', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching pet details: Request failed with status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error(error);
    });
    return events;
}

async function getPets() {
    // Clear existing table data
    const tableBody = document.getElementById("pets-table-body");
    tableBody.innerHTML = "";

    const fieldsToDisplay = []

    try {
        // Get pets from backend
        const pets = await fetchPetDetails()

        // Populate the table with pets data
        for (const pet of pets.items) {
            const row = document.createElement("tr");
            for (const key in pet) {
                if (fieldsToDisplay.includes(key)) {
                    const cell = document.createElement("td");
                    cell.textContent = pet[key];
                    row.appendChild(cell);
                }
            }
    
            const buttonCell = document.createElement("td");
            const contactButton = document.createElement("button");
            contactButton.textContent = "Contact";
            contactButton.classList.add("info-button");
            contactButton.onclick = () => {};
            buttonCell.appendChild(contactButton);

            row.appendChild(buttonCell);
            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error(error);
    }
}

async function fetchWalkerDetails() {
    const events = await fetch('https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod/walkers', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching pet details: Request failed with status ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(error => {
        console.error(error);
    });
    return events;
}

async function getWalkers() {
    // Clear existing table data
    const tableBody = document.getElementById("walkers-table-body");
    tableBody.innerHTML = "";

    const fieldsToDisplay = []

    try {
        // Get walkers from backend
        const walkers = await fetchWalkerDetails()

        // Populate the table with walkers data
        for (const walker of walkers.items) {
            const row = document.createElement("tr");
            for (const key in walker) {
                if (fieldsToDisplay.includes(key)) {
                    const cell = document.createElement("td");
                    cell.textContent = walker[key];
                    row.appendChild(cell);
                }
            }
    
            const buttonCell = document.createElement("td");
            const contactButton = document.createElement("button");
            contactButton.textContent = "Contact";
            contactButton.classList.add("info-button");
            contactButton.onclick = () => {};
            buttonCell.appendChild(contactButton);

            row.appendChild(buttonCell);
            tableBody.appendChild(row);
        }
    } catch (error) {
        console.error(error);
    }
}