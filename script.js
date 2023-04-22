let searchicon = document.querySelector('#searchicon')
let searchinput = document.querySelector('#searchinput')
searchicon.addEventListener('click', function(){
    searchicon.classList.add('hidding')
    searchinput.classList.remove('hidding')
})
searchinput.addEventListener('blur', function(){
    searchicon.classList.remove('hidding')
    searchinput.classList.add('hidding')
    searchinput.value = " "
})
searchinput.addEventListener('keyup',event =>{
    if(event.code === 'Enter'){
        searchicon.classList.remove('hidding')
        searchinput.classList.add('hidding')
        searchinput.value = " "
    }
})

let reasonbtn = document.querySelectorAll('.reasonbtn')

for(let i = 0; i < reasonbtn.length; i++){
    reasonbtn[i].addEventListener('click', function(){
        this.classList.toggle("active")
        let panel = this.nextElementSibling;
        let vniz = document.querySelector('#ourplus')
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.classList.remove('unvisible');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}

