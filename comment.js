let input = document.querySelector('.textofcom')
let btn = document.querySelector('.btnofcom')
let parent = document.querySelector('.comments')
btn.addEventListener('click', function(){
    let newcom = document.createElement('div')
    let newimg = document.createElement('img')
    let newname = document.createElement('h6')
    let newtext = document.createElement('p')

    newimg.classList.add('newimg')
    newimg.src="img/meal3.PNG";

    newname.classList.add('newname')
    newname.textContent = "Гость"

    newtext.textContent = input.value;
    newtext.classList.add('newtext')


    newcom.classList.add('comment')
    parent.prepend(newcom)
    newcom.appendChild(newimg);
    newcom.appendChild(newname);
    newcom.appendChild(newtext);

    input.value= '';

})