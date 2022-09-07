let btndata=document.querySelector("button");
let data=document.querySelector(".text");
var a=10
btndata.addEventListener("click",function(){
    if(a==10 || a==1){
        a=10
setTimeout(() => {
    data.innerHTML=a--
    setTimeout(() => {
        data.innerHTML=a--
        setTimeout(() => {
            data.innerHTML=a--
            setTimeout(() => {
                data.innerHTML=a--
                setTimeout(() => {
                    data.innerHTML=a--
                    setTimeout(() => {
                        data.innerHTML=a--
                        setTimeout(() => {
                            data.innerHTML=a--
                            setTimeout(() => {
                                data.innerHTML=a--
                                setTimeout(() => {
                                    data.innerHTML=a--
                                    setTimeout(() => {
                                        data.innerHTML=a
                                        setTimeout(() => {
                                            data.innerHTML="Happy Independence Day!!"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 0);
    }
    
})
