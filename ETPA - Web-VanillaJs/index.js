//Hacer función para insertar el texto inicial
//Hacer función para coja la opción del input, y la inserte como un paragraph. 
// y con esa opción busque el output en el json y con ese output, llame al texto o textos correspondientes y los inserte en un nuevo child. 

let story;

fetch("./storyText.json")
    .then(function(resp){
        return resp.json();
    }).then( function (data) {
        story = data;
    });


function getOption () {
    let selectedOption;
    let optionA = document.getElementById("a").checked;
    let optionB = document.getElementById("b").checked;
    let currentParagraph = document.getElementById("story-text").lastElementChild.id;


    if(!optionA && !optionB){
        window.alert('Selecciona una opción para que la historia pueda continuar');
        return;
    }

    if (optionA) {
        selectedOption = "a";
    }else{
        selectedOption = "b";
    }

    continueStory(selectedOption, currentParagraph);

}

//This function handles the following steps in the story
function continueStory(selectedOption, currentParagraph){
    let nextTextId = getNextText(selectedOption, currentParagraph);
    let selectedOptionText = getSelectedOptionText(selectedOption, currentParagraph); //Get text to build h2 in the page.

    createNewParagraph(nextTextId, selectedOptionText); // shows the new text and h2 on the website.
    let optionsAreChanged = changeOptions (nextTextId); // changes the options if available. Returns false if there are no more options.

    if(!optionsAreChanged){
        changeButtonAction();                           // Change button text and function in order to reload the adventure.
    }
        
}

/*Gets the current object and checks if it has more options to retrieve*/

function getNextText (selectedOption, currentText) {
    
    let currentTextObject = story.paragraphs.find( ({id}) => id == currentText);
    console.log(currentTextObject.options)

    if (currentTextObject.options.length != 0){
        let nextTextId = currentTextObject.options.find(({id}) => id == selectedOption).output;
        return nextTextId;
    }
    
    return null
    
}

function getSelectedOptionText(selectedOption, currentText){
    let currentTextObject = story.paragraphs.find( ({id}) => id == currentText);
    let selectedOptionText = currentTextObject.options.find(({id}) => id == selectedOption).optionText;

    return selectedOptionText;
}

function getNewText (nextTextId){
    return story.paragraphs.find( ({id}) => id == nextTextId).text;
}

function createNewParagraph (nextTextId,selectedOptionText) {

    let newSection = document.createElement('div');
    newSection.setAttribute("id", nextTextId);
    
    let newParagraphTitle = document.createElement('h2');
    newParagraphTitle.setAttribute("class", "story-div-decisition-made");
    newParagraphTitle.innerHTML = selectedOptionText;
    newSection.appendChild(newParagraphTitle);

    let newParagraphText = document.createElement('p');
    newParagraphText.innerHTML = getNewText(nextTextId);
    newSection.appendChild(newParagraphText);

    document.getElementById("story-text").appendChild(newSection);

}

function changeOptions (nextTextId){
    let NextTextObject = story.paragraphs.find( ({id}) => id == nextTextId);

    if (NextTextObject.options.length == 0){
        let options = document.getElementById("story-options");
        document.getElementById("story-holder").removeChild(options);

        return null;
    }
    
    let optionA = NextTextObject.options.find(({id}) => id == 'a').optionText;
    let optionB = NextTextObject.options.find(({id}) => id == 'b').optionText;

    document.getElementById("opt-a-text").innerHTML = optionA;
    document.getElementById("opt-b-text").innerHTML = optionB;

        return true; 

}

function changeButtonAction (){
    let button = document.getElementById("story-options-button");
    button.setAttribute("value", "Jugar otra vez");
    button.setAttribute("onClick", "playAgain()");

}

function playAgain(){
    location.reload();
}





