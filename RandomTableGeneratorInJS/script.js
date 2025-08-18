
let button=document.querySelector("#generateBtn");
let table=document.querySelector("#table");

button.addEventListener("click",()=>{

   table.innerHTML="";
   
   let number=Math.floor(Math.random()*100+1);
   console.log(number);


   for(let i=1;i<11;i++){
        table.innerHTML+=number + " * " + i + " = " + number*i + "<br>";
   }
   
})
   