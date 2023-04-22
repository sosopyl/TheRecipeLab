let meal1 = 0;
let meal2 = 0;
let meal3 = 0;
let meal4 = 0;
let meal5 = 0;
let meal6 = 0;
let meal7 = 0;
let meal8 = 0;
let meal9 = 0;
let meal10 = 0;
let meal11 = 0;
let meal12 = 0;

let testing = []
let answers = document.querySelectorAll('.answer')
let btn = document.querySelector('#btn')
btn.addEventListener('click', function(){
    for(let answer of answers){
        if(answer.checked == true){
            let res1 = answer.classList[1];
            testing.push(res1.slice(1))
        }
    }
    console.log(testing)
})
