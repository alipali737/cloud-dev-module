const invokeAPI = "https://02z3rs3dlg.execute-api.eu-west-2.amazonaws.com/prod"

$(document).ready(function () {
    $("#pets-form").submit(function (event) {
        event.preventDefault();

        var formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        $.ajax({
            url: invokeAPI+"/pets",
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (data) {
                console.log("Success: ", data);
                location.reload();
            },
            error: function (error) {
                console.error("Error: ", error);
            }
        });
    });
    $("#walkers-form").submit(function (event) {
        event.preventDefault();

        var formData = {};
        $(this).serializeArray().forEach(function(item) {
            formData[item.name] = item.value;
        });

        $.ajax({
            url: invokeAPI+"/walkers",
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function (data) {
                console.log("Success: ", data);
                location.reload();
            },
            error: function (error) {
                console.error("Error: ", error);
            }
        });
    });
});