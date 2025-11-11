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
    timeCoding > 365 ? years > 1 ? timeCoding = years + ' years and ' + (timeCoding%365) : timeCoding = years + ' year and ' + (timeCoding%365) : timeCoding = timeCoding;
    document.getElementById('time-coding').innerHTML = timeCoding + ' days';
}

codingSince();

const slider = () => {
    let hobImgs = ['assets/media/img/stock piano img.jpg','assets/media/img/stock language img.jpg']
    let hobAlts = ['Piano photo','Languages photo']
    let hobbies = ['Piano','Languages'];
    let description = [
        'I\'ve always loved to play the piano - one of my favourite pastimes is sitting down and working out the notes and chords of a new song I\'ve discovered!',
        'Languages play a huge part in all of our lives. I grew up speaking English and Swedish, but languages are not only verbal...'
    ];
    let link = ['hobbies/piano.html','hobbies/languages.html'];

    let n = document.getElementById('sliderIndex').value;

    n > hobbies.length - 1 ? n = 0 : n = n;


    let hobbyImg = document.getElementById('hob-img');
    let hobby = document.getElementById('hob-title');
    let hobDesc = document.getElementById('hob-desc');
    let hobLink = document.getElementById('hob-link');


    hobbyImg.setAttribute('src',hobImgs[n]);
    hobbyImg.setAttribute('alt',hobAlts[n]);

    hobLink.setAttribute('href',link[n]);

    hobby.innerHTML = hobbies[n];
    hobDesc.innerHTML = description[n];

    n++;
    document.getElementById('sliderIndex').value = n;
}
slider();
setInterval(function() {slider()}, 5000);

