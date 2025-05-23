document.addEventListener("DOMContentLoaded", initAPP);


// class Excuse{
//     constructor(excuse){
//         this.excuse = excuse;
       
//     }

//     displayHighExcuse(){
//         return `<p>${this.excuse}</p>`;
//     }

//     displayIntermediate(){
//         return `<p>${this.excuse}</p>`;
//     }

//     displayLow(){
//         return `<p>${this.excuse}</p>`;
//     }

//     displayExtremeExcuse(){
//         return `<p>${this.excuse}</p>`;
//     }

// }


function initAPP(){
    console.log("Initializing the App...");
   

    const btnGenerateExcuse = document.getElementById("btn-generate-excuse");
    const btnExtremeExcuse = document.getElementById("btn-extreme-excuse");

    btnGenerateExcuse.addEventListener("click",()=>{generateExcuse()});
    btnExtremeExcuse.addEventListener("click",()=>{generateExtreme()});



}

// function verifyButton(){
//     console.log("Button clicked!");
//     let excuseNeeded  = "<ol>";
//     console.log('Why would you do that?! You are lucky to have Better Clueless!')
//    excuseNeeded += `<p> Button was clicked here</p>`;
//     excuseNeeded += "</ol>";

//     const excusesPlaceHolder = document.getElementById("excuses-list");
//     excusesPlaceHolder.innerHTML = excuseNeeded
// }

// function verifyButton2(){
//     console.log("Button clicked again!");
  
// }
function getPromptText(){   
    let prompt = document.getElementById("prompt-text-box").value;
    return prompt;
}
function getExtremePromptText(){
    extremePrompt = getPromptText();
    extremePrompt += ', this is an extreme situation and i need a really good excuse!, Keep in mind i want a paragraph of no more than 5 lines this is and urgent situation so make it believable';
    return extremePrompt;

}

function getHighPromptText(){
    highPrompt = getPromptText();
    highPrompt += ', its high stakes i need a really good excuse! while the stakes are high and it has to be a blievable excuse please keep it under 3 sentences maximum';
    return highPrompt;
}
function getMediumPromptText(){
    mediumPrompt = getPromptText();
    mediumPrompt += ', my situation is not that bad but i still need a good excuse to not get in trouble! Do not go over 2 sentences';
    return mediumPrompt; 
}
function getLowPromptText(){
    lowPrompt = getPromptText();
    lowPrompt += ', its not that deep, so make a really surface level excuse! Try to keep at a best of 1 sentence';
    return lowPrompt; 
}

function generateExcuse(){
    let bob = "";
    const level = document.querySelector('input[name="level"]:checked').id;
    if(level == "high-level"){
         bob = getHighPromptText()
    }
    else if(level == "medium-level"){
        bob = getMediumPromptText()
    }
    else if(level == "low-level"){
        bob = getLowPromptText()
    }
    bob = bob + "no more questions asked, just give me the excuse"
    generateExcuseApi(bob)
}



async function generateExcuseApi(prompt) {
    try {
        const response = await fetch(`/api/excuse?prompt=${prompt}`,
    {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need here
            },
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        const excuse = data.response;

        document.getElementById('excuses-list').innerText = excuse;
    } catch (error) {
        console.error('Error generating excuse:', error);
    }
}




function generateExtreme(){
    
    const bobExtreme = getExtremePromptText();
    generateExcuseApi(bobExtreme);
}

async function displayExtremeMessUp(){ 

    let excuseNeeded  = "<ol>";
    console.log('Why would you do that?! You are lucky to have Better Clueless!')
    excuseNeeded += `<p> Why would you do this??! You are lucky to have Better Clueless! </p>`;

    // let prompt = document.getElementById("prompt-text-box").value;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    excuseNeeded += `<p>${text}</p>`;
    excuseNeeded += "</ol>";

    return excuseNeeded;

    // const excusesPlaceHolder = document.getElementById("excuses-list");
    // excusesPlaceHolder.innerHTML = excuseNeeded
}

 async function displayHighExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('You need help! We got you covered!');
    excuseNeeded += `<p> How could you??! You,re in good hands with Better Clueless! </p>`;

    // const prompt = document.getElementById("prompt-text-box").value;
    // prompt += ', its high stakes i need a really good excuse!';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    // const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${text}</p>`;

    excuseNeeded += "</ol>";

    return excuseNeeded;

    // const excusesPlaceHolder = document.getElementById("excuses-list");
    // excusesPlaceHolder.innerHTML = excuseNeeded
}

async function displayMediumExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('Wow! it seems like you are in a bit of a pickle! Better Clueless to the rescue!');
    excuseNeeded += `<p> Wow! it seems like you are in a bit of a pickle! Better Clueless to the rescue </p>`;

    // const prompt = document.getElementById("prompt-text-box").value;
    // prompt += ', my situation is not that bad but i still need a good excuse to not get in trouble!';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    // const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${text}</p>`;

    excuseNeeded += "</ol>";



    excuseNeeded += "</ol>";

    return excuseNeeded;
    // const excusesPlaceHolder = document.getElementById("excuses-list");
    // excusesPlaceHolder.innerHTML = excuseNeeded
}

 async function displayLowExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('Does this even matter? Better not risk it though... Better Clueless will handle it😉')
    excuseNeeded += `<p> Does this even matter? Better not risk it though... Better Clueless will handle it😉 </p>`;
   

    // const prompt = document.getElementById("prompt-text-box").value;
    // prompt += ', its not that deep, so make a really surface level excuse!';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
  
    // const excuse = new Excuse("//generated excuse");
    excuseNeeded += `<p>${text}</p>`;

    excuseNeeded += "</ol>";  



    excuseNeeded += "</ol>";

    return excuseNeeded;

//     const excusesPlaceHolder = document.getElementById("excuses-list");
//     excusesPlaceHolder.innerHTML = excuseNeeded
}

