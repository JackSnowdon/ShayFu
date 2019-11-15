$(document).ready(function () {

    const values = {}

    $('#code-1-form').submit(function() {
        // Get all the forms elements and their values in one step
        const values = $(this).serializeArray();     
        console.log(values);

        var code = $("#code-value-1").val();

        console.log(code);

        for(var v in values){
            console.log(v);
            console.log(values[v]);

        }
    });











});