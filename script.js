
let msg = document.querySelector(".msg");
let btn = document.querySelector('.btn');
let file = document.querySelector('.file');
let text = document.querySelector('.text');



btn.addEventListener("click", function (){

  let data = new  FormData();
  data.append("image",file.value);

  fetch(
"https://api.api-ninjas.com/v1/imagetotext",
    {
      method:"post",
      mode:"cors",
      body:data,
      headers :{
        'Access-Control-Allow-Origin':'*',
        "X-Api-Key":"PqXennSSHBhZSw9vhui9gA==EECwctjFvSPtAgu7"
      }
    }
  ).then(r =>{
    console.log(r);
  });
})


