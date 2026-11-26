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
    reader.onload = function (event)
    {
        document.getElementById("image").src = event.target.result;
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
let color = document.getElementById("foreground-color");
color.addEventListener("input", setColor);
function setColor(event)
{
    /*------------------------------------------------------------------------------
    == - сравнивает два значения;
    === - сравнивает два значения и типы этих значений;
    === - возвращает 'true' толбко в том лучае, если совпадают как значения, так и типы данных.
    --------------------------------------------------------------------------------
    */
    document.body.style[(event.target.id === 'background-color' ? 'backgroundColor' : 'color')] = event.target.value;
    /*(event.target.id === "background-color" ?
        document.body.style.backgroundColor :
        document.body.style.color) = event.target.value;
    */
   /*if (event.target.id === "background-color")
        document.body.backgroundColor = event.target.value;
    else
        document.body.color = event.target.color;
        */
    console.log(event.target.id);
    
}
document.addEventListener("mousemove", traceMouse);
function traceMouse(event)
{
    document.getElementById("mouse").innerHTML =
        `X = ${event.clientX}, Y = ${event.clientY}`;
}

document.getElementById("switch-background").addEventListener("click", switchBackground);
function switchBackground(event)
{
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.body.className = document.body.className === "dark" ? "light" : "dark";
    /*let skin = document.body.className;
    let switchButton = document.getElementById("switch-background");
    switchButton.src = skin === "dark" ? "moon.jpg" : "sun.png";
    document.body.className = skin === "dark" ? "light" : "dark";
    //document.getElementById("debug-background").innerHTML = switchButton.src;
    document.getElementById("debug-background").innerHTML = document.body.className;
    */
}
document.getElementById("switch-background-delay").addEventListener("change", setDelay);
function setDelay(e)
{
    let delay = e.target.value;
    document.getElementById('switch-background').style.transition =
        document.body.style.transition = 
        `color ${delay}s, background-color ${delay}s, background-image ${delay}s`;
    console.log(document.body.style);
    console.log(document.getElementById('#switch-background').style);
}

/*/////////////////////////////////////////////////////////////////////////////////////////////////*/

function addLeadingZero(number)
{
    return number < 10 ? "0" + `${number}` : `${number}`;
}
function tickTimer()
{
    let date = new Date();
    document.getElementById("raw-date").innerHTML = date.toString();

    document.getElementById("hours").innerHTML =   addLeadingZero(date.getHours());
    document.getElementById("minutes").innerHTML = addLeadingZero(date.getMinutes());
    document.getElementById("seconds").innerHTML = addLeadingZero(date.getSeconds());

    document.getElementById("years").innerHTML =   addLeadingZero(date.getFullYear());
    document.getElementById("months").innerHTML = addLeadingZero(date.getMonth()+1);
    document.getElementById("days").innerHTML = addLeadingZero(date.getDate());

    setTimeout(tickTimer, 100);
}
tickTimer();