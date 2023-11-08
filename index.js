const input = document.querySelector(".input")
const button = document.querySelectorAll("button")

let output = [];

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let btnValue = e.target.dataset.value

        if (btnValue === '='){
            let answer = output.join("")
            input.textContent = eval(answer)
            output = []
        } else if (btnValue === "AC"){
            input.textContent = ''
            output = []
        } else if (btnValue === "DEL"){
            output = output.slice(0,-1)
            input.textContent = output.join("")
        }  else {

        input.textContent += btnValue
        output.push(btnValue)



        }
    })
})
