
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector('.container');

hamburger.addEventListener('click', function (){

    hamburger.classList.toggle('active');
    container.classList.toggle('active');  
});

const clickable = document.querySelectorAll('.clickable');

for(let item of clickable)
{
    item.addEventListener('click', function(){
        hamburger.classList.remove('active');
        container.classList.remove('active');
        console.log(item);
    })
};

// -------- part-3 - starts ---------

const cardOption1 = document.querySelector('.part3Sub1');
const cardOption2 = document.querySelector('.part3Sub2');
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2');

cardOption1.addEventListener('click',function(){

    card1.checked = true;

    cardselector();
});

cardOption2.addEventListener('click',function(){

    card2.checked = true;

    cardselector();
});

function cardselector(cardbox1, cardbox2)
{
    if(card1.checked)
    {
        cardOption1.classList.add('cardclass');
        cardOption2.classList.remove('cardclass');
    }
    if(card2.checked)
    {
        cardOption2.classList.add('cardclass');
        cardOption1.classList.remove('cardclass');
    }
};

// -------- part-3 - ends -----------

// -------- part2 - email input starts -------

const emailselector1 = document.querySelector(".email_selector1");
const emailSelector2 = document.querySelector(".email_selector2");
const emailInput = document.querySelector(".email_input");

emailselector1.addEventListener('click', function(){

    emailInput.disabled = true;
    emailInput.value = "";
})

emailSelector2.addEventListener('click', function(){

    emailInput.disabled = false;
})

// -------- part2 - email input ends ---------
// -------- part-4 Table - starts ----------

const allChecker = document.querySelector('.all-checker');
const checks = document.querySelectorAll(".checking");

allChecker.addEventListener('click', function(){

    if(allChecker.checked)
    {
        for(let item of checks)
        {
            item.checked = true;
        }
    }
    else
    {
        for(let item of checks)
        {
            item.checked = false;
        }
    }
});

// -------- part-5 Table - ends ------------