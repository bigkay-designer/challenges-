/*challege 1  game that turns you age in to days  */


// grabing HTML classes


const h2 = document.querySelector('.title');
const run = document.querySelector('.run');
const reset = document.querySelector('.reset');
const para = document.querySelector('.para');

let allyear = 365;

run.addEventListener('click', data)
reset.addEventListener('click', resting)

function data(){

    let content = prompt(' what is your age? ');
    content = content * allyear;
    para.textContent = ' you are ' + content + ' days old';    para.style.backgroundColor = 'green';
    para.style.color = 'white';
    para.style.width = '90%';

    if (content < 1){
        status = 'invalid number, try again'
        para.textContent = status;
    }

}

function resting(){
    result = para.textContent = '';
    para.style.backgroundColor = 'white'

}


            /*challenge 1 finished*/



            /* challenge 2 creating grocery list*/


let addbtn = document.getElementById('add-btn')
let grinput = document.getElementById('gr-input')
let grp1 = document.getElementById('gr-p1')

addbtn.addEventListener('click', list)

function list (){

    let grUl = document.createElement('ul');//created ul
    grUl.setAttribute('class', 'uls')

    let grLi = document.createElement('li');//creates li
    grLi.setAttribute('class', 'items')

    grUl.appendChild(grLi);

    let inputValue = document.getElementById('gr-input').value;
    let txt = document.createTextNode(inputValue);

    grLi.appendChild(txt); //appending text tot the LIs

    let grElement = document.getElementById('odlist');
    grElement.appendChild(grLi)

    grLi.style.listStyle = 'decimal';
    grLi.style.padding = '15px';
    grLi.style.fontSize = '20px';

    console.log(grLi.parentElement);

   
}

        //challenge 2 finished 


        // challenge 3 Blackjacl

