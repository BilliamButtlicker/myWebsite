const tellFortune = () => {
    let display = document.getElementById('fortune');
    display.innerHTML = generateMessage();
}