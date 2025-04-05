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
function createCars(cars){
    const honda = new Car("Honda", 'Civic', 2018, 29.99, 'Blue');
    const toyota = new Car("Toyota", 'Camri', 2017, 79.99, 'Red', true);
    const subaru = new Car("Subaru", 'SUV', 2017, 79.99, 'Red');

    
    cars.push(honda);
    cars.push(toyota);
    cars.push(subaru)
}

function initAPP(){
    //1 Initialization steps: attach eventHandlers to the buttons.
    console.log("Initializing the App...");
    //2 create the car array and populate it with at least 5 cars
    const cars =[];
    createCars(cars);
    console.log(cars)

    //3 Add/Attach eventHandlers to the buttons
    const btnGenerateExcuse = document.getElementById("btn-generate-excuse");
    const btnExtremeExcuse = document.getElementById("btn-extreme-excuse");

    btnGenerateExcuse.addEventListener("click",generateExcuse());
    btnExtremeExcuse.addEventListener("click",()=>{displayExtremeMessUp()});/*another option is to create another parameterless function to be put  instead of using callBack function*/


}
//    //part of option2
//     function handleShowCarsClick(){
//         displayAllCars(cars);
//     } 
// }


// function displayAllCars(cars){
//     let carsList  = "<ol>";
//     console.log('Displaying Excuses')
//     cars.forEach(car => {
//         carsList += `<li> ${car.displayInfo()} </li>`;
//     });
//     carsList += "</ol>";

//     const carsPlaceHolder = document.getElementById("car-list");
//     carsPlaceHolder.innerHTML = carsList
// }

// function displayChoices(){
//     let excuseList  = "<ol>";
//     excuseList += `<button> High stakes, I need your help!! </button>`;
//     excuseList += `<button> Medium stakes, lets not send anyone to the hospital but its serious enough </button>`;
//     excuseList += `<button> Low stakes, put some humor into it </button>`;
//     excuseList += "</ol>";

//     const excusesPlaceHolder = document.getElementById("excuses-list");
//     excusesPlaceHolder.innerHTML = carsList
// }

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
    console.log('Why would you do this??! We got you covered!')
   excuseNeeded += `<p> High stakes, don't worry we cot you covered! </p>`;
    excuseNeeded += `//generated excuse`;
    excuseNeeded += "</ol>";

    const carsPlaceHolder = document.getElementById("excuses-list");
    carsPlaceHolder.innerHTML = excuseNeeded
}

function displayHighExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('You need help! We got you covered!')
   excuseNeeded += `<p> High stakes, don't worry we cot you covered! </p>`;
    excuseNeeded += `//generated excuse`;
    excuseNeeded += "</ol>";

    const carsPlaceHolder = document.getElementById("excuses-list");
    carsPlaceHolder.innerHTML = excuseNeeded
}

function displayMediumExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('You need help! We got you covered!')
   excuseNeeded += `<p> High stakes, don't worry we cot you covered! </p>`;
    excuseNeeded += `//generated excuse`;
    excuseNeeded += "</ol>";

    const carsPlaceHolder = document.getElementById("excuses-list");
    carsPlaceHolder.innerHTML = excuseNeeded
}

function displayLowExcuse(){ 
    let excuseNeeded  = "<ol>";
    console.log('You need help! We got you covered!')
   excuseNeeded += `<p> High stakes, don't worry we cot you covered! </p>`;
    excuseNeeded += `//generated excuse`;
    excuseNeeded += "</ol>";

    const carsPlaceHolder = document.getElementById("excuses-list");
    carsPlaceHolder.innerHTML = excuseNeeded
}
