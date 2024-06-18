function  calculate(num1,num2){
  
    function operation(num1,num2,callback){
        return callback(num1,num2)
    }

    function addition(num1,num2){
        return num1+num2
    }

    function multiplication(num1,num2){
        return num1*num2
    }

    let addition1=operation(num1,num2,addition)
    console.log(addition1)

    let multiplication1=operation(num1,num2,multiplication)
    console.log(multiplication1)
}



calculate(3,4)