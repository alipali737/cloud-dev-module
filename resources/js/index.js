const invokeAPI = "https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod"

const walkersForm = document.getElementById("walkers-form");
walkersForm.addEventListener('submit', submitWalkerForm);

async function submitWalkerForm(event) {
    event.preventDefault();
    var formData = {};
    var formElements = event.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name) {
            formData[element.name] = element.value;
        }
    }

    var jsonData = JSON.stringify(formData);

    console.log("JSON: " + jsonData);

    const response = await fetch(invokeAPI+"/walkers", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });
    
    response.json().then((data) => {
        console.log(data);
    });
    
    location.reload();
}

const petsForm = document.getElementById("pets-form");
petsForm.addEventListener('submit', submitPetsForm);

async function submitPetsForm(event) {
    event.preventDefault();
    var formData = {};
    var formElements = event.target.elements;
    for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        if (element.name) {
            formData[element.name] = element.value;
        }
    }

    var jsonData = JSON.stringify(formData);

    console.log("JSON: " + jsonData);

    const response = await fetch(invokeAPI+"/pets", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });
    
    response.json().then((data) => {
        console.log(data);
    });

    location.reload();
}