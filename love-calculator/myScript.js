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

document.getElementById('userNames').textContent = `${yourName} ❤️ ${crushName}`;
document.getElementById('lovePercentage').textContent = `Love percentage: ${loveResult.percentage}`
document.getElementById('loveMessage').textContent = loveResult.message;

