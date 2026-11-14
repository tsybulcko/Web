// JavaScript source code
function Factorial()
{
    let numberElement = document.getElementById("number");
    let number = numberElement.value;
    let resultElement = document.getElementById("factorial-result");
    let f = BigInt(1);
    for (let i = 1n; i <= number; i++)
    {
        f *= i;
    }
    //resultElement.value = `${number}! = ${f}`;
    resultElement.innerHTML = `${number}! = ${f}`;
}

function setImage()
{
    let filename = document.getElementById("image-file");
    let reader = new FileReader();
    reader.onload = function (e)
    {
        document.getElementById("image").src = e.target.result;
    }
    reader.readAsDataURL(filename.files[0]);
}
function setBackgroundColor(event)
{
    document.body.style.backgroundColor = event.target.value;
    console.log(event.target.id);
   // document.body.style.backgroundColor = document.getElementById("background-color").value;
}
function setForegroundColor()
{
    document.body.style.color = document.getElementById("foreground-color").value;
}
function setColor(event)
{
    /*------------------------------------------------------------------------------
    == - сравнивает два значения;
    === - сравнивает два значения и типы этих значений;
    === - возвращает 'true' толбко в том лучае, если совпадают как значения, так и типы данных.
    --------------------------------------------------------------------------------
    */
    if (event.target.id === "background-color")
        document.body.backgroundColor = event.target.value;
    else
        document.body.color = event.target.color;
    console.log(event.target.id);
}