const tellFortune = () => {
    let display = document.getElementById('fortune');
    display.innerHTML = generateMessage();
}

const codingSince = () => {
    let started = new Date('2025-06-16');
    let now = new Date;

    timeCoding = Math.floor((now - started) / 1000 / 60 / 60 /24);
    document.getElementById('time-coding').innerHTML = timeCoding + ' days';
}

codingSince();
