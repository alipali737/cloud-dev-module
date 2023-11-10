const invokeAPI = "https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod"

document.addEventListener('DOMContentLoaded', () => {
    var petsForm = document.getElementById("pets-form");
    petsForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleFormSubmission(invokeAPI+"/pets", petsForm);
    });

    var walkersForm = document.getElementById("walkers-form");
    walkersForm.addEventListener('submit', (event) => {
        event.preventDefault();
        handleFormSubmission(invokeAPI+"/walkers", walkersForm);
    });

    function handleFormSubmission(endpoint, form) {
        var formData = new FormData(form);

        fetch(endpoint, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error adding details: Request failed with status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success: ', data);
            location.reload();
        })
        .catch(error => {
            console.error('Error: ', error);
        });
    }
});