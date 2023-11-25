const slides=document.querySelectorAll('.slider');
let counter=0;
slides.forEach(
    (slide, index)=>{
        slide.style.left=`${index*100}%`
    }
)
const getPrev=()=>{
    counter--;
    slideImg();
    if (counter<0) {
        return;
    }
}
const getNext=()=>{
    counter++;
    if (counter >= slides.length -1) {
        counter = slides.length - 2;
        return;
    }
    slideImg();
    
}
const slideImg=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        })
}