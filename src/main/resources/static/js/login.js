$(document).ready(function () {
    const regEx = /\./g;

    $("#pass").keypress(function (e) {
        let symbol = String.fromCharCode(e.keyCode);

        if (symbol === "." && regEx.test($(this).val())) {
            e.preventDefault();
        }
    });
});
