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
    // content = content * allyear;
    // para.textContent = ' you are ' + content + ' days old';    
    para.style.backgroundColor = 'green';
    para.style.color = 'white';
    para.style.width = '90%';

    if (content >= 1){
        content = content * allyear;
        para.textContent = ' you are ' + content + ' days old';

    }
    else if (content < 1){
        status = 'invalid number, try again'
        para.textContent = status;

    }

    else{
        para.textContent = 'oops!! Put a number'
    }


    // else if(content === string){
    //     string-error = ''
    // }

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


        // challenge 3 Blackjack


let bjGame = {
    'you':{'scoreSpan': '#bj-your-id', 'div': '#bj-yours', 'score': 0},
    'dealer':{'scoreSpan':'#bj-dealer-id', 'div':'#bj-dealer', 'score': 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K', 'Q','J','A'],
    'cardsMap' : {'2': 2, '3':3, '4': 4, '5':5, '6': 6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'Q':10, 'J':10, 'A':[1, 11]}
} 


YOU =bjGame['you'];
DEALER =bjGame['dealer'];

const btHitSound = new Audio('sounds/swish.m4a')

            // Event listenrs

document.querySelector('#bj-hit-btn').addEventListener('click', bjHitBtn)
document.querySelector('#bj-dealer-btn').addEventListener('click', bjDealBtn )
document.querySelector('#bj-stand-btn').addEventListener('click', computer )
document.querySelector('#bj-stand-btn').addEventListener('click', bjStandBtn)

            // Hit btn main function

function bjHitBtn(){
    let card = randomCard();
    //console.log(card)
    showCard(card, YOU)

    updateScore(card, YOU)
    //console.log(YOU['score'])
    showScore(YOU)
    
}

        //Generating random number

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return bjGame['cards'][randomIndex];
}
        // show card function

function showCard(card, activePlayer){  
    if (activePlayer['score'] <=21){
    const cardImage = document.createElement('img');
    cardImage.src = `bj-images/${card}.png`;
    cardImage.style.width = '80px'
    cardImage.style.height = '100px'
    cardImage.style.paddingRight = '10px'
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    btHitSound.play()
    }
}

        //Deal btn function

function bjDealBtn(){
    let delIMages = document.querySelector('#bj-yours').querySelectorAll('img');
    let delIMages2 = document.querySelector('#bj-dealer').querySelectorAll('img');
    
    for(i=0; i < delIMages.length; i++){
        delIMages[i].remove()
    }
    for(i=0; i < delIMages2.length; i++){
        delIMages2[i].remove()
    }

    YOU['score'] = 0;
    DEALER['score'] = 0
    
    document.querySelector('#bj-your-id').textContent = 0;
    document.querySelector('#bj-dealer-id').textContent = 0;

    
}

            // update score

function updateScore (card, activePlayer){

    if(card === 'A'){

        if(activePlayer['score'] + bjGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += bjGame['cardsMap'][card][1]

        } else{
            activePlayer['score'] += bjGame['cardsMap'][card][0];
        }
        

    }
    else{
        activePlayer['score'] += bjGame ['cardsMap'] [card]
    }

   

}



function showScore(activePlayer ){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'busted'

    }

    else if(activePlayer['score'] < 21){

        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
    
    
}
        //stand button


function bjStandBtn(){

    let stand = document.querySelector('#bj-hit-btn');
    //stand.removeEventListener('click', bjHitBtn)
    // stand.remove(document.querySelector('#bj-hit-btn'))



}

function computer(){
    let card = randomCard();
    //console.log(card)
    showCard(card, DEALER)

    updateScore(card, DEALER)
    console.log(DEALER['score'])
    showScore(DEALER)
}
