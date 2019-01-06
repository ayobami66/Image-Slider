const images=document.querySelector('.images');
const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');

let counter=0;

nextBtn.addEventListener('click', nextPic)
prevBtn.addEventListener('click', prevPic)




function nextPic(){
    if(counter==10){
        counter=-1
    }
    counter++;
    images.style.backgroundImage =`url(imgs/bcg-${counter}.jpg)`
};

function prevPic(){
    if (counter==0){
        counter=11
    }
    counter--;
    images.style.backgroundImage =`url(imgs/bcg-${counter}.jpg)`
};



