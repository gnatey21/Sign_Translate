function getInput() {
    let in_string = document.getElementById("string_input").value;
    document.getElementById("output").innerHTML = "";
    for(var i = 0; i < in_string.length; i++) {
        let character = in_string[i];
        character.toUpperCase();
        
        if (character.search(/[A-Z|a-z]/) != -1) {
            let new_card = document.createElement("span");
            new_card.classList.add("card");
            
            newLabel = document.createElement("label");
            newLabel.setAttribute("for", i);
            newLabel.innerHTML += character;

            let newImage = document.createElement("img");

                newImage.src = "./ASL/" + character + ".png";
                newImage.setAttribute("name", i);
                newImage.style.height = '55px';
                newImage.style.width = '55px';
            //newImage = document.createElement()
            
            new_card.appendChild(newLabel);
            new_card.appendChild(newImage);
            document.getElementById("output").appendChild(new_card);
            //document.body.appendChild(new_card);
        } else if (character == " ") {
            let new_card = document.createElement("span");
            document.getElementById("output").appendChild(new_card);
        }
    }
}