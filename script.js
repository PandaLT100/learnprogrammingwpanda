const lessoh = document.querySelectorAll('h3');
const lessot = document.querySelectorAll('h2');
const lesso = document.getElementById('thelesson');


async function changeBg() {
    lessoh.forEach(h3 => h3.style.color ="blue");
    lessot.forEach(h2 => h2.style.color = "lightgreen");
}
