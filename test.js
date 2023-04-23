let meal1 = 0; //КРУАСАН В КРАСНОЙ РЫБОЙ
let meal2 = 0; //СЫРНИКИ С КЛЮКВОЙ
let meal3 = 0; //САЛАТ ВЕГАН
let meal4 = 0; //НАСУАЗ С ТУНЦОМ
let meal5 = 0; //ТЫКВЕННЫЙ СУП
let meal6 = 0; // ТОИ ЯМ
let meal7 = 0; // ПАСТА БРОКОЛЛИ ИНДЕЙКА
let meal8 = 0; // УДОН С КРЕВЕТКАМИ
let meal9 = 0; // АВАКАДО ТОСТ
let meal10 = 0; // ПАНАКОТА ВЕГАН
let meal11 = 0;// МОРКОВНЫЙ ТОРТ 
let meal12 = 0; // ХОЛОДНЫЙ ЧАЦ
let meal13 = 0; // КОФЕ


let btn = document.querySelector('#btn')
btn.addEventListener('click', function(){

    let answers = document.querySelectorAll('.answer')
    let res = answering(answers)
    console.log(res)
    let aaa = resulting(res);
    console.log(aaa)
    let finish = maxnum(aaa)
    console.log(finish)

    
}
)

function answering(arr){
    let testing = []
    for(let answer of arr){
        if(answer.checked == true){
            let res1 = answer.classList[1];
            testing.push(res1.slice(1))
        }
    }
    let itog = new Set(testing)
    return itog
}

function resulting(arr){
    let meal1 = 0; //КРУАСАН В КРАСНОЙ РЫБОЙ
    let meal2 = 0; //СЫРНИКИ С КЛЮКВОЙ
    let meal3 = 0; //САЛАТ ВЕГАН
    let meal4 = 0; //НАСУАЗ С ТУНЦОМ
    let meal5 = 0; //ТЫКВЕННЫЙ СУП
    let meal6 = 0; // ТОИ ЯМ
    let meal7 = 0; // ПАСТА БРОКОЛЛИ ИНДЕЙКА
    let meal8 = 0; // УДОН С КРЕВЕТКАМИ
    let meal9 = 0; // АВАКАДО ТОСТ
    let meal10 = 0; // ПАНАКОТА ВЕГАН
    let meal11 = 0;// МОРКОВНЫЙ ТОРТ 
    let meal12 = 0; // ХОЛОДНЫЙ ЧАЦ
    let meal13 = 0; // КОФЕ

    for(let elem of arr){
    if(elem == 1){
        meal2++;
        meal10++;
        meal11++;
        meal13++;
    }

    if(elem == 2){
        meal1++;
        meal9++;
        meal4++;
    }

    if(elem == 3){
        meal6++;
        meal8++;
        meal7++;
        meal5++;
    }
 
    if(elem == 4){
        meal3++;
        meal12++;
    }

    if(elem == 5){
        meal5++;
        meal6++;
        meal7++;
        meal8++;
    }

    if(elem == 6){
        meal2++;
        meal3++;
        meal4++;
    }

    if(elem == 7){
        meal1++;
        meal9++;
        meal10++;
        meal11++;
    }

    if(elem == 8){
        meal12++;
        meal13++;
    }
    if(elem == 9){
        meal1++;
        meal2++;
        meal3++;
        meal4++;
        meal5++;
        meal6++;
        meal7++;
        meal8++;
        meal9++;
        meal10++;
        meal11++;
        meal12++;
        meal13++;
    }
    if(elem == 10){
        meal2++;
        meal3++;
        meal5++;
        meal10++;
        meal12++;
        meal9++;
        meal13++
    }
    if(elem == 11){
        meal3++;
        meal5++;
        meal10++;
        meal12++;
    }
    if(elem == 13){
        meal2++;
        meal3++;
        meal5++;
        meal7++;
        meal9++;
        meal10++;
        meal11++;
        meal12++;
        meal13++;
    }
    if(elem == 14){
        meal1++;
        meal4++;
        meal6++;
        meal8++;
    }
    if(elem == 15){
        meal1++;
        // meal2++;
        // meal3++;
        meal4++;
        // meal5++;
        meal6++;
        meal7++;
        meal8++;
        // meal9++;
        // meal10++;
        meal11++;
        // meal12++;
        // meal13++;
    }
    if(elem == 17){
        meal5++;
        meal6++;
    }
    if(elem == 18){
        meal1++;
        meal11++;
        meal10++;
        meal12++;
    }
    if(elem == 19){
        meal3++;
        meal4++;
    }
    if(elem == 20){
        meal12++;
        meal13++;
    }
    if(elem == 21){
        meal2++;
        meal7++;
        meal8++;
        meal9++;
    }
    if(elem ==22){
        meal5++;
        meal6++;
        meal8++;
        meal11++;
        meal13++;
    }
    if(elem == 23){
        meal1++;
        meal2++;
        // meal3++;
        meal4++;
        // meal5++;
        meal6++;
        meal7++;
        meal8++;
        meal9++;
        // meal10++;
        meal11++;
        // meal12++;
        // meal13++;
    }
    if(elem == 24){
        meal1++;
        meal2++;
        meal3++;
        meal4++;
        meal7++;
        meal9++;
        meal10++;
        // meal12++;
    }






}
let resall = []
resall.push(meal1)
resall.push(meal2)
resall.push(meal3)
resall.push(meal4)
resall.push(meal5)
resall.push(meal6)
resall.push(meal7)
resall.push(meal8)
resall.push(meal9)
resall.push(meal10)
resall.push(meal11)
resall.push(meal12)
resall.push(meal3)
return resall

}
function maxnum(arr){
    let meal1 =  'КРУАСАН В КРАСНОЙ РЫБОЙ'
    let meal2 = 'СЫРНИКИ С КЛЮКВОЙ'
    let meal3 = 'САЛАТ ВЕГАН'
    let meal4 = 'НАСУАЗ С ТУНЦОМ'
    let meal5 = 'ТЫКВЕННЫЙ СУП'
    let meal6 =  'ТОИ ЯМ'
    let meal7 = 'ПАСТА БРОКОЛЛИ ИНДЕЙКА'
    let meal8 =  'УДОН С КРЕВЕТКАМИ'
    let meal9 = 'АВАКАДО ТОСТ'
    let meal10 =  'ПАНАКОТА ВЕГАН'
    let meal11 ='МОРКОВНЫЙ ТОРТ '
    let meal12 = ' ХОЛОДНЫЙ ЧАЦ'
    let meal13 = 'КОФЕ'

    let resall = []
    resall.push(meal1)
    resall.push(meal2)
    resall.push(meal3)
    resall.push(meal4)
    resall.push(meal5)
    resall.push(meal6)
    resall.push(meal7)
    resall.push(meal8)
    resall.push(meal9)
    resall.push(meal10)
    resall.push(meal11)
    resall.push(meal12)
    resall.push(meal3)


    let numbers = arr; 
    let  winner = Math.max(...numbers);

    let res =[]

    for(let i = 0; i <13; i++){
      if(numbers[i] == +winner){
        res.push(i)
      }
    }

    console.log(res)
    if(res.length == 1){
        return resall[res[0]]
    } else{
        let random = Math.floor(Math.random() * res.length)
        let random2 = res[random]
        return resall[random2]
    }
}