//Getting the element container
let containerdata=document.querySelector(".container-fluid")

//Creation of a Card with specific class name using only DOM
function createCard(className){

    let card=document.createElement("div")
    card.className="card ".concat(className+"card")

    let cardheader=document.createElement("div")
    cardheader.className="card-header ".concat(className+"header")

    let card_body=document.createElement("div")
    card_body.className="card-body text-center"

    let cardbody=document.createElement("div")
    cardbody.className="cardbody ".concat(className+"cardbody")

    let charheading=document.createElement("b")
    charheading.append(document.createTextNode("Characters:"))

    let card_footer=document.createElement("div")
    card_footer.className="card-footer ".concat(className+"footer")

    let charclass=document.createElement("div")
    charclass.className="characters ".concat(className+"characters")

    //appending childs to their repectice parents
    card.appendChild(cardheader)
    card.appendChild(card_body)
    card.appendChild(card_footer)
    card_body.appendChild(cardbody)
    card_body.appendChild(charheading)
    card_body.appendChild(charclass)

    //appending all the elements to the container
    containerdata.appendChild(card)

}

//Defining a function which fetches a specific url
async function geturl(link){
    let urldata=await fetch(link)
        return await urldata.json()
    }
   
//Defining a function which assigns the data to the respective cards
let getData=(index,className)=>geturl("https://anapioficeandfire.com/api/books").then(books=>{

    createCard(className);

        let headerdata=document.querySelector("."+className.concat("header"))
    headerdata.innerHTML=books[index].name
    let bodydata=document.querySelector("."+className.concat("cardbody"))
    let footerdata=document.querySelector("."+className.concat("footer"))
    footerdata.innerHTML=`<b>No of pages:</b>${books[index].numberOfPages}`
    let divdata=`
          <div><b>Author:</b><br><span class="data">${books[index].authors}</span></div>
          <div><b>Publisher:</b><br><span class="data">${books[index].publisher}</span></div>
          <div><b>Released:</b><br><span class="data">${books[index].released.substring(0,10)}</span></div>
          <div><b>ISBN:</b><br><span class="data">${books[index].isbn}</span></div>  
        `
    bodydata.innerHTML=divdata


    let charbodydata=document.querySelector("."+className.concat("characters"))
        charbodydata.innerHTML=null
    for(let i=0;i<11;i++){
        let chardata=''
        geturl(books[index].characters[i]).then(y=>{
            if(y.name){
                chardata=`<li>${y.name}</li>`
            }
            charbodydata.innerHTML+=chardata
        })
    }
})

//displaying the initial data with fixed classed(one,two,three)
getData(0,"one")
getData(1,"two")
getData(2,"three")

//Defining a function which changes the current page and displays respective data
function displayData(page){
    containerdata.innerHTML=''
    
    if(page!=4){
        let array=["one","two","three"]
        let k=0
        for(let i=3*(page-1);i<3*page;i++){
            if(i<10){
                getData(i,array[k++])
            }
        }
    }
    else{
        getData(9,"two")
    }
}

//Defining the function which shows the book page
function show(){
    let content=document.querySelector(".content")
    content.style.display="block"
}

//Defining the function which hides the book page
function hide(){
    let content=document.querySelector(".content")
    content.style.display="none"
}

//
function showChar(){
    let showchar=document.querySelectorAll(".characters")
    showchar.forEach(x=>{
        x.style.display="block"
    })
}

function hideChar(){
    let showchar=document.querySelectorAll(".characters")
    showchar.forEach(x=>{
        x.style.display="none"
    })
}

