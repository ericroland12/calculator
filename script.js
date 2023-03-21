class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
        
    }
   

    clear(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
    }    

    delete(){
     this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number){
        if(number == '.' &&  this.currentOperand.includes('.')) return;    
        this.currentOperand = this.currentOperand.toString() + number.toString(); 
        
    } 

    chooseOperation(operation){
        if(this.currentOperand == '')return
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';



    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            
            case '-':
                computation = prev - current;
                break;

            case '/':
                computation = prev / current;
                break;

            case "*":
                computation = prev * current;
                break;

            case '^':
                computation = Math.pow(prev, current);
                break;    
            default:
                return;        
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
        this.previousOperandTextElement.innerText = this.previousOperand;
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.previousOperand}${this.operation}`;
            
        }

    }


}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const equalButton = document.querySelector('[data-equals]');
const previousOperandTextElement = document.querySelector('#previous-operand');
const currentOperandTextElement = document.querySelector('#current-operand');





const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText) 
        calculator.updateDisplay();
    })
});



deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
    
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText) 
        calculator.updateDisplay() 
    })
});


equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay()
})
    


console.log(this.operation)






// var output = document.getElementById('current-operand');
// var previousOutput = document.getElementById('previous-operand');
// var buttons = Array.from(document.querySelectorAll('button'));
// var sqrRoot = document.getElementById('sqr-root'); 

// var sqr = document.getElementById('^');
// var equal = document.getElementById('equals');

// const square = function(){
//     previousOutput.append('**');
    
// }

// sqr.addEventListener('click', square);

// const root = function(x){
//     if(previousOutput.innerText.includes(sqrRoot)){
//         output.innerText =  Math.sqrt(x);
//     }
// }
// equal.addEventListener('click', root)
// console.log(root)






// buttons.map(buttons =>{
//     buttons.addEventListener('click', (e) =>{
        
//         switch(e.target.innerText){
//             case 'DEL':
//                 if(previousOutput.innerText){
//                     previousOutput.innerText =   previousOutput.innerText.slice(0, -1);
//                 }
               
//                 break;
            
//             case 'AC':
//                 previousOutput.innerText = '';
//                 output.innerText = '';
//                 break;
            
//             case '=':
//                 try{
                   
//                     output.innerText = eval(previousOutput.innerText)
                   
                                        

//                 }catch{
//                     previousOutput.innerText = 'Syntax Error!'
//                 }
                
                
//                 break; 


//             default:
//                 previousOutput.innerText += e.target.innerText;
                
//         }
        
//     })
// })

   
        
     
 





