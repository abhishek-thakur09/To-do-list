
let input = document.querySelector("#search-input");
let btn = document.querySelector("#btn")
let list = document.querySelector("#list-conatiner");


btn.addEventListener("click", ()=>{
     return addtask(input.value);
})

function addtask(){
    if(input.value === ''){
        alert('Please enter your task first!!  🚨');
    }
    else{
        let task = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = '\u00d7'


        task.textContent = input.value;
        list.appendChild(task);
        task.appendChild(span);
        input.value = '';


         savedata();
    }
}

list.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
})

function savedata(){
    localStorage.setItem("tasks", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("tasks");
}

showData();
