const invokeAPI = "https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod"

$(document).ready(function () {
    $("#pets-form").submit(function (event) {
        event.preventDefault();
        $.post(invokeAPI + '/pets', $(this).serialize(), function (data) {
                console.log("Success: ", data);
                location.reload();
            });
    });
    $("#walkers-form").submit(function (event) {
        event.preventDefault();
        $.post(invokeAPI + '/walkers', $(this).serialize(), function (data) {
            console.log("Success: ", data);
            location.reload();
        });
    });
});