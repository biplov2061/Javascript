let input = document.getElementById("userinput");
let expression = '';

function press(num)
{
    expression = expression + num;
    input.value = expression;
}

function result()
{ 
    input.value = eval(expression);
    expression  =  0;
}

function erase()
{
    expression = '';
    input.value = expression;
}

