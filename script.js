const form = document.forms.setCard;
const uInp = form.elements.user;
const nInp = form.elements.number;
const sInp = form.elements.system;

const uEl = document.querySelector(".user");
const nEl = document.querySelector(".number");
const sEl = document.querySelector(".system");

let result = document.querySelector("tbody");

sInp.addEventListener("change", function (e) {
    sEl.style.backgroundImage = `url(${this.value})`;
})

uInp.addEventListener("input", function (e) {
    uEl.textContent = this.value;
})

function setNumber(num) {
    let result = num;
    for (let i = result.length; i<16; i++){
        result += "_";
    }
    return result;
}

nInp.addEventListener("input", function (e) {
    let result = setNumber(this.value);
    let html = "<span>";
    for (let i = 0; i< result.length; i++){
        if (i%4 === 0 && i !== 0){
            html += " </span><span>";
        }
        html += result[i];
    }
    html += "</span>";
    nEl.innerHTML = html;
});


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let number = setNumber(nInp.value);
    let textNumber = "";
    for (let i = 0; i< number.length; i++){
        if (i%4 === 0 && i !== 0){
            textNumber += " ";
        }
        textNumber += number[i];
    }
    let content = `
        <tr>
            <td>${uInp.value}</td>
            <td>${textNumber}</td>
            <td><img src="${sInp.value}" alt="pay"></td>
        </tr>`;
    result.innerHTML += content;
})