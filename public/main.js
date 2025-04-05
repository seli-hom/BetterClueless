document.addEventListener("DOMContentLoaded", initAPP);


class Excuse{
    constructor(excuse){
        this.excuse = excuse;
       
    }

    displayHighExcuse(){
        return `<p>${this.excuse}</p>`;
    }

    displayIntermediate(){
        return `<p>${this.excuse}</p>`;
    }

    displayLow(){
        return `<p>${this.excuse}</p>`;
    }

    displayExtremeExcuse(){
        return `<p>${this.excuse}</p>`;
    }

}


function initAPP(){
    //1 Initialization steps: attach eventHandlers to the buttons.
    console.log("Initializing the App...");
    //2 create the car array and populate it with at least 5 cars
   

    //3 Add/Attach eventHandlers to the buttons
    const btnGenerateExcuse = document.getElementById("btn-generate-excuse");
    const btnExtremeExcuse = document.getElementById("btn-extreme-excuse");

    btnGenerateExcuse.addEventListener("click",logOnConsole());
    btnExtremeExcuse.addEventListener("click",()=>{displayExtremeMessUp()});/*another option is to create another parameterless function to be put  instead of using callBack function*/


}

function logOnConsole(){
    console.log("Button clicked!");
}


function generateExcuse(){
    let chosenDegree = document.getElementsByName("level").value;
    if(chosenDegree == "high"){
        displayHighExcuse()
    }
    else if(chosenDegree == "medium"){
        displayIntermediate()
    }
    else if(chosenDegree == "low"){
        displayLow()
    }
}

function displayExtremeMessUp(){ 
    let excuseNeeded  = "<ol>";
    console.log('Why would you do that?! You are lucky to have Better Clueless!')
   excuseNeeded += `<p> Why would you do this??! You are lucky to have Better Clueless! </p>`;
    excuseNeeded += `//generated excuse`;
    excuseNeeded += "</ol>";

    const excusesPlaceHolder = document.getElementById("excuses-list");
    excusesPlaceHolder.innerHTML = excuseNeeded
}

function displayHighExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('You need help! We got you covered!');
    excuseNeeded += `<p> How could you??! You,re in good hands with Better Clueless! </p>`;

    const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${excuse}</p>`;

    excuseNeeded += "</ol>";

    const excusesPlaceHolder = document.getElementById("excuses-list");
    excusesPlaceHolder.innerHTML = excuseNeeded
}

function displayMediumExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('Wow! it seems like you are in a bit of a pickle! Better Clueless to the rescue!');
    excuseNeeded += `<p> Wow! it seems like you are in a bit of a pickle! Better Clueless to the rescue </p>`;


    const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${excuse}</p>`;



    excuseNeeded += "</ol>";

    const excusesPlaceHolder = document.getElementById("excuses-list");
    excusesPlaceHolder.innerHTML = excuseNeeded
}

function displayLowExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('Does this even matter? Better not risk it though... Better Clueless will handle it😉')
    excuseNeeded += `<p> Does this even matter? Better not risk it though... Better Clueless will handle it😉 </p>`;
   

    const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${excuse}</p>`;



    excuseNeeded += "</ol>";

    const excusesPlaceHolder = document.getElementById("excuses-list");
    excusesPlaceHolder.innerHTML = excuseNeeded
}

