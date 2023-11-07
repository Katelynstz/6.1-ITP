function sayLol(timestamp) {
    document.write("<script type='button' value='Lol'>");

}

function addButton(){

    console.log("addButton");
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "button");
    inputElement.setAttribute("value", "New Button");

    //var buttonText = document.createTextNode("New button");
    //inputElement.appendChild(buttonText);

    var parent= document.getElementById("memeParagraph");
    parent.appendChild(inputElement);

    var newParagrapgh = document.createElement("p");

    var prargrapghText = document.createTextNode("New Prargrapgh");
    parent.appendChild(prargrapghText);

    parent.appendChild(newParagrapgh);
}