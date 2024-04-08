const adviceArea = document.querySelector(".advice-slip")


function  getAdvice() {

  // body...


  fetch("https://api.adviceslip.com/advice")
  .then((res)=>res.json())
  .then(
    (data)=>
    adviceArea.innerHTML=`<span class="id">${data.slip.id}</span>.<h2 class="advice">${data.slip.advice}</h2>`


    )
}

getAdvice();


