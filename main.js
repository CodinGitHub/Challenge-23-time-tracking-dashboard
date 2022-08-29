import data from './data.json' assert {type: 'json'}

let BgColors = [
    {activity: 'work', color: 'hsl(15, 100%, 70%)'},
    {activity: 'play', color: 'hsl(195, 74%, 62%)'},
    {activity: 'study', color: 'hsl(348, 100%, 68%)'},
    {activity: 'exercise', color: 'hsl(145, 58%, 55%)'},
    {activity: 'social', color: 'hsl(264, 64%, 52%)'},
    {activity: 'self care', color: 'hsl(43, 84%, 65%)'},
]

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section')

data.forEach(element=>{
    console.log(element.title.toLocaleLowerCase())
});


dailyBtn.addEventListener('click', ()=>{    
    drawElements(dailyArray);
});

weeklyBtn.addEventListener('click', ()=>{    
    drawElements(weeklyArray);
});

monthlyBtn.addEventListener('click', ()=>{    
    drawElements(monthlyArray);
});

function drawElements(array){
    secondSection.innerHTML = '';
    array.forEach((element, index) => {
        let activity = data[index].title;
        let activityLowerCase = activity.toLocaleLowerCase();
        
        //Buscar el color
        let colorObject = BgColors.find(element => element.activity === activityLowerCase)
        console.log()

        if(activityLowerCase === 'self care'){
            activityLowerCase = 'self-care'
        }

        
        secondSection.innerHTML += `
        <div class="card">
            <div class="card__background" style="background-color: ${colorObject.color};">
                <img class="card__background--image" src="./images/icon-${activityLowerCase}.svg" alt="">
            </div>
            <div class="card__details">
                <div class="card__up">
                <p class="card__title">${activity}</p>
                <img class="card__dots" src="./images/icon-ellipsis.svg" alt="dots">
                </div>
                <div class="card__down">
                <p class="card__hours">${element.current}hrs</p>
                <p class="card__state">Previous - ${element.previous}hrs</p>
                </div>
            </div>
        </div>
        ` 
    });
}