
let date=document.querySelectorAll(".Date");
let Month=document.querySelectorAll(".Month");
let year=document.querySelectorAll(".year");
let h3El=document.querySelectorAll("h3")
let h2El=document.querySelectorAll("h2")

function button(){
    let dateinp=date[0].value;
    let monthinp=Month[0].value;
    let yearinp=year[0].value;
    let Booleans= isNaN(dateinp);
    let Boolean= isNaN(monthinp);
   let num=[yearinp];
num =num.map(number=>{
    let numlen=number.length;
    if(numlen===1||numlen===2||numlen===3||dateinp == "" || 
    monthinp == ""||monthinp>=13||dateinp>=31||Booleans==true||Boolean==true){
h3El[0].innerHTML="please chack your date of birth"
setTimeout(()=> {
    h3El[0].innerHTML = "";
    }, 2000);
    }
   else{
    let today=new Date( );
    let dateOFBirth=new Date(`${date[0].value,Month[0].value,year[0].value}`);
    today = today.getTime();
dateOFBirth = dateOFBirth.getTime();
let contant = today-dateOFBirth;
let divide=contant / 1000 / 60 / 60 / 24 / 365
let finel=Math.floor(divide)
h2El[0].innerHTML=`Your Age is ${finel}`
   }
})
}
function cla(){
    date[0].value=""
    Month[0].value=""
    year[0].value=""
    h2El[0].innerHTML=""
}
