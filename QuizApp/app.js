const question = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    answer: 'c'
  },
  {
    question: "What is the largest mammal in the world?",
    a: "Elephant",
    b: "Blue Whale",
    c: "Giraffe",
    d: "Hippopotamus",
    answer: 'b'
  },
  {
    question: "What is the square root of 81?",
    a: "7",
    b: "8",
    c: "9",
    d: "10",
    answer: 'c'
  }
];
let index=0;
let total=question.length;
let right=0,wrong=0;
let que=document.getElementById('q');
let queOption=document.querySelectorAll(".options");
const nextQue=()=>{
    if (index>=total) {
        return endQuiz();
    }
    reset();
    const data=question[index];
    // console.log(data);
    que.innerText=`${index+1}) ${data.question}`
    queOption[0].nextElementSibling.innerText=data.a;
    queOption[1].nextElementSibling.innerText=data.b;
    queOption[2].nextElementSibling.innerText=data.c;
    queOption[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    const data=question[index];
    const ans1=getAns();
    // console.log(ans1);
    if(ans1===data.answer){
        right++;
    }else{
        wrong++;
    }
    index++;
    nextQue();
    return;
}
const getAns=()=>{
    let correct;
    queOption.forEach((input)=>{
        if(input.checked){
            correct=input.value;
            // console.log(correct);
        }
    })
    return correct;
}
const reset=()=>{
    queOption.forEach((input)=>{
        input.checked=false;
    })
}

const endQuiz=()=>{
    document.querySelector('.box').innerHTML=`<div style='text-align='center'>
    <h3>Thank You for playing this quiz !</h3>
    <h2>${right}/${total} are correct</h2>
    </div>`
}
nextQue();
