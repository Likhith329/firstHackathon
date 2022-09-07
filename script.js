let data=document.querySelectorAll("input[name='star']")
let tdat=document.querySelector(".text")
data.forEach(x=>{
    x.addEventListener("click",function(){
       tdat.innerHTML=x.value
    })
})