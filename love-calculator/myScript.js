const yourName = document.getElementById(yourName).value;

const crushName =  document.getElementById(crushName).value;

function loveCalculator () {

    const percentage = Math.floor(Math.random() * 100) + 1;

    let message;
    
    if (percentage >= 70) {
        message = 'WOW! That\'s love!';
    } else if (percentage >= 30) {
        message = 'You look good together :)';
    } else {
        message= 'Better keep on looking...';
    }

    return {

        percentage: percentage + '%',
        message: message
    };

}

const loveResult = loveCalculator();

console.log('Your name: ' + yourName);

console.log('Your crush\'s name: ' + crushName);

console.log('Your love percentage is : ' + loveResult.percentage);

console.log(loveResult.message);