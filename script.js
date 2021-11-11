document.getElementById("opt_id").oninput = function () {
    "use strict";
    var o_lit = document.getElementById("input_lit").value;
   

    var res = document.getElementById("res_id");
    var opt = document.getElementById("opt_id").value;
    var lit = parseInt(o_lit);
   var stat="";
   
    if (isNaN(o_lit) || !o_lit) {
        res.innerHTML = "must enter number of liters after choose type of solar";
        res.style.background="red";
        res.style.width="500px";
        res.style.color="white";
        res.style.padding="20px";
        res.style.marginTop="20px";
    } 
    
   
    else {
        res.style.background="green";
        res.style.width="500px";
        res.style.color="white";
          res.style.padding="20px";
        res.style.marginTop="20px";

        switch (opt) {
            case '80':
                stat = lit*6.25 ;
                
                break;
            case '92':
                 stat = lit*7.50;
                break;
                 case '95':
                  stat = lit*6.25;
                break;
           
            default:

                 stat = lit*0.90;

                break;
        }

res.innerHTML="the total result " +stat + " LE  of " + lit +" liter solar "+opt;

    }





};



