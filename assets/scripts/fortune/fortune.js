// arrays of statements and messages to pull from
const statements = ['The scarecrows are watching.','The wind is strong today...','The cat is now on it\'s 7th life.','The gnome is hiding in the tree stump.','Cold like Autmn showers.','The badgers are coming!','The rabbit dropped his pocketwatch.'];
const goodMessages = ['You will find what you didn\'t need.','Luck is falling from the trees.','You left it in the treehouse','Your troubles will melt away.','The faeries are dancing!'];
const badMessages = ['The crows will steal it.','The garden is angry.','The mice will eat your cheese.','The windows won\'t open.','The washing machine stole your socks!'];


// Factory function for building message objects
const msgFactory = (msg='', gb=true) => {
    return {
        message: msg,
        good: gb
    }

}

// returns a random 'good' message
const goodMsg = () => {
    let i = Math.floor(Math.random()*goodMessages.length);
    return goodMessages[i];
}

// returns a random 'bad' message
const badMsg = () => {
    let i = Math.floor(Math.random()*badMessages.length);
    return badMessages[i];
}

// selects a random statement
const statement = () => {
    let i = Math.floor(Math.random()*statements.length);
    return statements[i];
}

// selects a good or bad message randomly and sends it to the factory.
const goodOrBad = () => {
    let gb = (Math.floor(Math.random()*2));
    return gb < 1 ? msgFactory(goodMsg(),true) : msgFactory(badMsg(),false);
}

// Adjusts the messages based on first or second, and returns the full message with correct conjugation.
const generateMessage = () => {
    let fullMsg = '';
    let state = statement();
    let fMsg = goodOrBad();
    let sMsg = goodOrBad();
    let conj = '';

    // checks the two messages aren't the same.
    while (sMsg.message == fMsg.message) {
        sMsg = goodOrBad();
    };

    // message conversion logic
    let punct = Array.from(fMsg.message);
    punct.pop();
    fMsg.message = punct.join('');

    sMsg.message = sMsg.message.toLowerCase();


    // conjugates based on whether the messages are both good/bad or one of each.
    (fMsg.good == sMsg.good) ? conj = ' and ' : conj = ', but ';

    fullMsg = state + ' ' + fMsg.message + conj + sMsg.message;
    return fullMsg;
}

console.log(generateMessage());