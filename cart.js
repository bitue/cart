
// var declare of first element amount


var addNum =document.getElementById("fiadd");
var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerHTML;
    fiamount=parseFloat(fiamount);

    


   

// first element add number as well as price increase 

addNum.addEventListener("click",function(){

    Currentamount=Currentamount+1;
    var Newfiamount=fiamount*Currentamount
    document.getElementById("fival").value = Currentamount;
    document.getElementById("fiamount").innerHTML=Newfiamount;
  
    
    
    
})
// first element remove element and min price
var minNum =document.getElementById("fimin");
minNum.addEventListener("click",function(){
    Currentamount=Currentamount-1;
    document.getElementById("fival").value = Currentamount;
    var Newfiamount=fiamount*Currentamount;
    document.getElementById("fiamount").innerHTML=Newfiamount
  

})

// second element var declare
var saddNum =document.getElementById("siadd");
var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerHTML;
    siamount=parseFloat(siamount); 
    
    // add and add price second element
saddNum.addEventListener("click",function(){

    sCurrentamount=sCurrentamount+1;
    var sNewfiamount=siamount*sCurrentamount
    document.getElementById("sival").value = sCurrentamount;
    document.getElementById("siamount").innerHTML=sNewfiamount;

    
    
    
})
 // remove and min price second element
var sminNum =document.getElementById("simin");
sminNum.addEventListener("click",function(){
    sCurrentamount=sCurrentamount-1;
    document.getElementById("sival").value = sCurrentamount;
    var sNewfiamount=siamount*sCurrentamount;
    document.getElementById("siamount").innerHTML=sNewfiamount
    

})


// add amount final chalan


// var clickAll = document.getElementsByClassName("btn-default")
// for (let i = 0; i < clickAll.length; i++) {
//     let element = clickAll[i];
//     element.addEventListener("click",function(){
//         console.log(element)
//     })

    
// }




