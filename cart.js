
// var declare of first element amount


var addNum =document.getElementById("fiadd");
var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerText;
    fiamount=parseFloat(fiamount);

var saddNum =document.getElementById("siadd");
var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerText;
    siamount=parseFloat(siamount); 
var minNum =document.getElementById("fimin");
var sminNum =document.getElementById("simin");




    // addNum.addEventListener("click",function(){

    //     addRemove(true) 
    
    // })
  

    // minNum.addEventListener("click",function(){

    //     addRemove(false) 

        
    // })
//     saddNum.addEventListener("click",function(){
//         caseCOunt(true)
  
//     })


//     sminNum.addEventListener("click",function(){
//         caseCOunt(false)
    

// })








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


      
    function caseCOunt (isIncrease){
        if(isIncrease==true){
            sCurrentamount=sCurrentamount+1;
        }
        if(isIncrease==false && sCurrentamount>0){
            sCurrentamount=sCurrentamount-1;
        }
       
        var sNewfiamount=siamount*sCurrentamount
        document.getElementById("sival").value = sCurrentamount;
        document.getElementById("siamount").innerText=sNewfiamount;
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

    
    // add and add price second element


  



// saddNum.addEventListener("click",function(){

//     sCurrentamount=sCurrentamount+1;
//     var sNewfiamount=siamount*sCurrentamount
//     document.getElementById("sival").value = sCurrentamount;
//     document.getElementById("siamount").innerText=sNewfiamount;

    
    
    
// })
 // remove and min price second element
// var sminNum =document.getElementById("simin");
//     sminNum.addEventListener("click",function(){
//     sCurrentamount=sCurrentamount-1;
//     var sNewfiamount=siamount*sCurrentamount;
//     document.getElementById("sival").value = sCurrentamount;
    
//     document.getElementById("siamount").innerText=sNewfiamount
    

// })




    





