let employees = [
  {
    id: 1,
    first_name: "Suresh",
    last_name: "Kumar",
    email: "suresh@gmail.com",
    gender: "male",
    ip_address: "160.192.178.23",
  },

  {
    id: 2,
    first_name: "Sourav",
    last_name: "Das",
    email: "sourav@gmail.com",
    gender: "male",
    ip_address: "160.192.168.23",
  },

  {
    id: 3,
    first_name: "Jhansi",
    last_name: "Das",
    email: "jhansi@gmail.com",
    gender: "female",
    ip_address: "160.192.128.23",
  },

  {
    id: 4,
    first_name: "John",
    last_name: "Paul",
    email: "john@gmail.com",
    gender: "male",
    ip_address: "160.192.198.23",
  },
  {
    id: 5,
    first_name: "Lavish",
    last_name: "paul",
    email: "lavish@gmail.com",
    gender: "male",
    ip_address: "160.192.148.23",
  },

  {
    id: 6,
    first_name: "Sourav",
    last_name: "Paul",
    email: "sourav@gmail.com",
    gender: "male",
    ip_address: "160.192.128.23",
  },
  {
    id: 7,
    first_name: "Sangeetha",
    last_name: "Paul",
    email: "sangeetha@gmail.com",
    gender: "female",
    ip_address: "160.193.178.23",
  },

  {
    id: 8,
    first_name: "Pavan",
    last_name: "Sai",
    email: "pavan@gmail.com",
    gender: "male",
    ip_address: "160.172.178.23",
  },
  {
    id: 9,
    first_name: "Pavni",
    last_name: "Das",
    email: "pavni@gmail.com",
    gender: "female",
    ip_address: "160.162.178.23",
  },
  {
    id: 10,
    first_name: "Jenny",
    last_name: "Paul",
    email: "jenny@gmail.com",
    gender: "female",
    ip_address: "160.182.178.23",
  },
];




let bdata1=document.getElementById("btn-1");
bdata1.addEventListener("click",function(){
var dat=document.getElementById("bdy")
dat.innerHTML=''
var a=0
employees.forEach(x =>{
  ++a
  let row=`<tr>
  <td>${a}</td>
  <td>${x.id}</td> 
  <td>${x.first_name}</td> 
  <td>${x.last_name}</td> 
  <td>${x.email}</td> 
  <td>${x.gender}</td> 
  <td>${x.ip_address}</td> 
   </tr>`
   
   dat.innerHTML+= row
})

 })




let bdata2=document.getElementById("btn-2")
bdata2.addEventListener("click",function(){
var dat=document.getElementById("bdy")
dat.innerHTML=''
let fildata=employees.filter(x =>{
return x.gender=="male"
})
var a=0
fildata.forEach(x=>{
  ++a
  let row=`<tr>
  <td>${a}</td>
  <td>${x.id}</td> 
  <td>${x.first_name}</td> 
  <td>${x.last_name}</td> 
  <td>${x.email}</td> 
  <td>${x.gender}</td> 
  <td>${x.ip_address}</td> 
   </tr>`
   dat.innerHTML+= row
})
}) 


let bdata3=document.getElementById("btn-3")
bdata3.addEventListener("click",function(){
var dat=document.getElementById("bdy")
dat.innerHTML=''
let fildata=employees.filter(x =>{
return x.gender=="female"

})
var a=0
fildata.forEach(x=>{
  ++a
  let row=`<tr>
  <td>${a}</td>
 <td>${x.id}</td> 
 <td>${x.first_name}</td> 
 <td>${x.last_name}</td> 
 <td>${x.email}</td> 
 <td>${x.gender}</td> 
 <td>${x.ip_address}</td> 
  </tr>`
  dat.innerHTML+= row
})
}) 


let srchdat=document.getElementById("srch")
srchdat.addEventListener("input",function(){
let dataval=srchdat.value
let filsrchdata=employees.filter(x=>{


   return x.first_name.includes(dataval)==true || x.last_name.includes(dataval)==true || x.id==dataval


})
var dat=document.getElementById("bdy");
dat.innerHTML=''
var a=0
filsrchdata.forEach(x=>{
  ++a
  let row=`<tr>
  <td>${a}</td>
 <td>${x.id}</td> 
 <td>${x.first_name}</td> 
 <td>${x.last_name}</td> 
 <td>${x.email}</td> 
 <td>${x.gender}</td> 
 <td>${x.ip_address}</td> 
  </tr>`
  dat.innerHTML+= row
})


})

