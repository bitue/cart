
// var declare of first element amount


var addNum =document.getElementById("fiadd");
var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerText;
    fiamount=parseFloat(fiamount);





    addNum.addEventListener("click",function(){

        addRemove(true) 
      
        
        
        
    })
    var minNum =document.getElementById("fimin");

    minNum.addEventListener("click",function(){

        addRemove(false) 
      
        
        
        
    })







    function addRemove(isIncrease){

        if(isIncrease==true){
            Currentamount=Currentamount+1;
        }
        if(isIncrease==false && Currentamount>0){

            Currentamount=Currentamount-1;
        }
        
        var Newfiamount=fiamount*Currentamount
        document.getElementById("fival").value = Currentamount;
        document.getElementById("fiamount").innerText=Newfiamount;
    }

    


   

// first element add number as well as price increase 

// addNum.addEventListener("click",function(){

//     Currentamount=Currentamount+1;
//     var Newfiamount=fiamount*Currentamount
//     document.getElementById("fival").value = Currentamount;
//     document.getElementById("fiamount").innerText=Newfiamount;
  
    
    
    
// })
// first element remove element and min price

// minNum.addEventListener("click",function(){
//     Currentamount=Currentamount-1;
//     var Newfiamount=fiamount*Currentamount;
//     document.getElementById("fival").value = Currentamount;
   
//     document.getElementById("fiamount").innerText=Newfiamount
  

// })

// second element var declare
var saddNum =document.getElementById("siadd");
var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerText;
    siamount=parseFloat(siamount); 
    
    // add and add price second element
saddNum.addEventListener("click",function(){

    sCurrentamount=sCurrentamount+1;
    var sNewfiamount=siamount*sCurrentamount
    document.getElementById("sival").value = sCurrentamount;
    document.getElementById("siamount").innerText=sNewfiamount;

    
    
    
})
 // remove and min price second element
var sminNum =document.getElementById("simin");
sminNum.addEventListener("click",function(){
    sCurrentamount=sCurrentamount-1;
    document.getElementById("sival").value = sCurrentamount;
    var sNewfiamount=siamount*sCurrentamount;
    document.getElementById("siamount").innerText=sNewfiamount
    

})


// add amount final chalan


var clickAll = document.getElementById("checkOut");

clickAll.addEventListener("click",function(){
        var totalAcc = document.getElementById("rtotal").innerText;
        totalAcc=parseFloat(totalAcc)

        totalAcc=Newfiamount+sNewfiamount;
        console.log(totalAcc)
        
        
       
        
    })

    





