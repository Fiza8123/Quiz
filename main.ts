import inquirer from "inquirer";

const quiz: {
question_01: string;
question_02: string;
question_03: string;
question_04: string;
question_05: string;
} = await inquirer.prompt([
    {
    name:"question_01",
    type:"list",
    message:"What is the correct keyword to define an interface in TypeScript?",
    choices:["A) class","B) interface"," C) function"," D) var"]
},
{
    name:"question_02",
    type:"list",
    message:"Which of the following is used to specify that a function parameter is optional in TypeScript?",
    choices:["?","!","#","*"]
},
{
    name:"question_03",
    type:"list",
    message:"Which TypeScript feature allows you to specify the types of variables, function parameters, and return values?",
    choices:[" Types",") Annotations","Interfaces"," Interfaces"] 
},
{
    name:"question_04",
    type:"list",
    message:"Which TypeScript keyword is used to create an enumeration?",
    choices:[" enum ","type","interface","  class"]
},
{
    name:"question_05",
    type:"list",
    message:"Which of the following TypeScript features allows you to create reusable code components with different types?",
    choices:[" Modules "," Namespaces","Generics"," Enums"]
}
]);

let score: number = 0;
switch(quiz.question_01){
    case "interface":
    console.log("1. correct!");
    ++score;
    break;
    default:
    console.log("1. incorrect");
}
switch(quiz.question_02){
    case "?":
    console.log("2. correct!");
    ++score;
    break;
    default:
    console.log("2. incorrect");
}
switch(quiz.question_03){
    case " Annotations":
    console.log("3. correct!");
    ++score;
    break;
    default:
    console.log("3. incorrect");
}

switch(quiz.question_04){
    case "enum":
    console.log("4. correct!");
    ++score;
    break;
    default:
    console.log("4. incorrect");
}
switch(quiz.question_05){
    case "Generics":
    console.log("5. correct!");
    ++score;
    break;
    default:
    console.log("5. incorrect")
}
console.log(`score: ${score}`)














