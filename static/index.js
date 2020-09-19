/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2=0) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

/**
 * Handle the user clicking on the Not button
 */
function doNot() {
    // send a NOT command tot he server with the first number
    let num1 = $("#num1").val();
    send("NOT", num1);
}


/**
 * Handle the user clicking the OR button
 */
function doOr() {
        let num1 = $("#num1").val();
        let num2 = $("#num2").val();
    send("OR", num1, num2);
    // probably should get two numbers and do Or
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    // probably should get two numbers and do And
        let num1 = $("#num1").val();
        let num2 = $("#num2").val();
    send("AND", num1, num2);
}
/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);
