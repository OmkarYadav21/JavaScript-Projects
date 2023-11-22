const endDate="28 November 2023 10:30 AM";
document.getElementById('dt').innerHTML=endDate;
const inputs=document.querySelectorAll('input');

const clock=()=>{
    const eDate=new Date(endDate);
    const sDate=new Date();
    // console.log(eDate);
    // console.log(sDate);
    const diff=(eDate-sDate)/1000;
    if(diff<0) return;
    console.log(diff);
    //calculate days
    inputs[0].value=Math.floor(diff/3600/24);
    //Hours
    inputs[1].value=Math.floor(diff/3600)%24;

    //Minutes
    inputs[2].value=Math.floor(diff/60)%60;

    //seconds
    inputs[3].value=Math.floor(diff)%60;




}
clock();
setInterval(
    ()=>{
        clock();
    },1000
)
