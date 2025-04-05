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


function displayChoices(){
    let excuseList  = "<ol>";
    excuseList += `<a> High stakes, I need your help!! </a>`;
    excuseList += `<a> High stakes, I need your help!! </a>`;
    excuseList += `<a> Low stakes, I could live but itd </a>`;
    excuseList += "</ol>";

    const excusesPlaceHolder = document.getElementById("excuses-list");
    excusesPlaceHolder.innerHTML = carsList
}