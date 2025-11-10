const tellFortune = () => {
    let display = document.getElementById('fortune');
    display.innerHTML = generateMessage();
}

const codingSince = () => {
    let started = new Date('2025-06-16');
    let now = new Date;

    // converts from milliseconds to days
    timeCoding = Math.floor((now - started) / 1000 / 60 / 60 / 24);

    // lists years as well if over 365 days
    years = Math.floor(timeCoding / 365);
    timeCoding > 365 ? timeCoding = years + ' years and' + (timeCoding%365) : timeCoding = timeCoding;
    document.getElementById('time-coding').innerHTML = timeCoding + ' days';
}

codingSince();
