const yourName = prompt('What is your name?');

const crushName = prompt('What si your crush\'s name?');

function loveCalculator () {

    const percentage = Math.floor((Math.random() * 100) + 1);

    let message;
    
    if (percentage >= 80) {
        message = 'WOW! That\'s love!';
    } else if (percentage >= 30) {
        message = 'You look good together :)';
    } else {
        message= 'Better keep on looking...';
    }

    return {

        percentage,
        message
    };

}