var addNum =document.getElementById("fiadd");
var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerHTML;
    fiamount=parseFloat(fiamount);

var total =document.getElementById("total");    


   



addNum.addEventListener("click",function(){

    Currentamount=Currentamount+1;
    var Newfiamount=fiamount*Currentamount
    document.getElementById("fival").value = Currentamount;
    document.getElementById("fiamount").innerHTML=Newfiamount;
    total = sNewfiamount+Newfiamount;
document.getElementById("total").innerText=total;
    
    
    
})

var minNum =document.getElementById("fimin");
minNum.addEventListener("click",function(){
    Currentamount=Currentamount-1;
    document.getElementById("fival").value = Currentamount;
    var Newfiamount=fiamount*Currentamount;
    document.getElementById("fiamount").innerHTML=Newfiamount
    total = sNewfiamount+Newfiamount;
document.getElementById("total").innerText=total;

})

// second element
var saddNum =document.getElementById("siadd");
var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerHTML;
    siamount=parseFloat(siamount); 
    
    // variable declare
saddNum.addEventListener("click",function(){

    sCurrentamount=sCurrentamount+1;
    var sNewfiamount=siamount*sCurrentamount
    document.getElementById("sival").value = sCurrentamount;
    document.getElementById("siamount").innerHTML=sNewfiamount;
    total = sNewfiamount+Newfiamount;
document.getElementById("total").innerText=total;
    
    
    
})

var sminNum =document.getElementById("simin");
sminNum.addEventListener("click",function(){
    sCurrentamount=sCurrentamount-1;
    document.getElementById("sival").value = sCurrentamount;
    var sNewfiamount=siamount*sCurrentamount;
    document.getElementById("siamount").innerHTML=sNewfiamount
    

})


// add amount final chalan



var total =document.getElementById("tax");
var total =document.getElementById("actualTotal");




