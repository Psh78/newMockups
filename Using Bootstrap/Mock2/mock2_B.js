
const hamburger = document.querySelector(".hamburger");
const container = document.querySelector('.sidebar_div');
const content = document.querySelector('.content_div')
hamburger.addEventListener('click', function (){

    hamburger.classList.toggle('active');
    container.classList.toggle('active');  
    container.classList.toggle('hide');
    content.classList.toggle('margis');
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
