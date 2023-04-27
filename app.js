const buttonelement = document.querySelectorAll('.input');
const screen = document.querySelector('.screen');
buttonelement.forEach((element) => {
    element.addEventListener('click', () => {
        if (element.id === "clear") {
            screen.innerText = "";
        }
        else if (element.id === "backspace") {
            let str = screen.innerText.toString();
            screen.innerText = str.substr(0, str.length - 1);
        }
        else if (screen.innerText != "" && element.id === "equal") {
            screen.innerText = eval(screen.innerText);
        }
        else if (screen.innerText == "" && element.id === "equal") {
            screen.innerText = "Empty!";
        }
        else {
            screen.innerText += element.id;
        }
    })
})
