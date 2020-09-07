

var Currentamount =document.getElementById("fival").value;
    Currentamount=parseFloat(Currentamount);
var fiamount= document.getElementById("fiamount").innerText;
    fiamount=parseFloat(fiamount);


var sCurrentamount =document.getElementById("sival").value;
    sCurrentamount=parseFloat(sCurrentamount);
var siamount= document.getElementById("siamount").innerText;
    siamount=parseFloat(siamount); 

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
        totalPrice()
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
        totalPrice()
    }



    function totalPrice(){
        const fnum =document.getElementById("fival").value;
        const fval =parseFloat(fnum);
        const snum =document.getElementById("sival").value;
        const sval =parseFloat(snum);
        


        document.getElementById("totalPrice").innerText = fval*1219 +sval*59
 
    }

    function eval(product){
        const productnum =document.getElementById(product+"ival").value;
        const productval =parseFloat(productnum); 
        return productval
    }




    


   


    





