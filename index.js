var function_btn = document.querySelectorAll(".calc").length;
var display= document.querySelector(".calculator-screen");


for(var i=0; i<function_btn; i++){
    document.querySelectorAll(".calc")[i].addEventListener("click", function(){
        var operand= this.innerHTML;
        
        switch(operand){
            case 'C':
                display.innerHTML = "";
                break;
            case '←':
                if(dispplay.innerHTML){
                    display.innerHTML = display.innerHTML.slice(0,-1);
                    break;
                }
            case '=':
                try{
                    display.innerHTML = eval(display.innerHTML);
                }
                catch{
                    display.innerHTML= "Error!";
                }
               
                break; 

            default:
                display.innerHTML += operand;
        }
    })
}


























// var buttone_one= 0;
// var operand =0;
// var buttone_two=0;

// for (var i=0; i< function_btn; i++){
//     for(var j=0; j< function_btn; j++){
//         for(var l=0; k< function_btn; k++){

      
//         document.querySelectorAll(".calc")[i].addEventListener("click", function(){
//             buttone_one= this.innerHTML; })

//         document.querySelectorAll(".calc")[j].addEventListener("click", function(){
//             button_two= this.innerHTML;
//         })   
//         document.querySelectorAll(".calc")[k].addEventListener("click", function(){
//             operand= this.innerHTML;
//         })   

//         switch(operand){
//             case '+':
//                 var result= button_one + button_two;
//                 break;
//             case '-':
//                 var result= button_one - button_two;
//                 break;
//             case '*':
//                 var result= button_one * button_two;
//                  break;
//             case '+':
//                 var result= button_one + button_two;
//                 break;
//                 default:;

//         }


//     }
//     }
// }
