let secretNumber = Math.trunc(20 * Math.random()) + 1;
let highscore = 0; //semicolon missing
let time = [0, 0];
let timerInterval; //Timer.Interval Property

// JavaScript is case-sensitive, so the event names should be lowercase 'click'.
document.querySelector('.again').addEventListener('click', function () {
    time = [0, 0];//semicolon missing
    secretNumber = Math.trunc(20 * Math.random()) + 1;// earlier there fixed value of 10 instead of generating a new random number between 1 and 20.
    document.querySelector('.score').textContent = '20';//need to use '.score' to select elements by class.
  
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    clearInterval(timerInterval);//clearing running time interval so that it does not create multiple timer or prevous one to collide with current one
});

//JavaScript is case-sensitive, so the event names should be lowercase 'click'.
document.querySelector('.check').addEventListener('click', function () {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        time[1]++;
        if (time[1] % 60 === 0) {
            time[0]++;
        }
        document.getElementById('timer').innerHTML = `${String(time[0]).padStart(2, '0')} : ${String(time[1]).padStart(2, '0')}`;//Timer Format - ( correct 00:05 instead of 0:5)

    }, 1000);

    this.style.backgroundColor = 'black';

    let guess = parseInt(document.querySelector('.guess').value); /* guess is obtained from the input as a string, while secretNumber is a number. to compare convert guess to a number using parseInt() */

    if (!guess) {
        document.querySelector('.message').textContent = 'Not a Valid input';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'You guessed it Right';
        document.querySelector('.number').style.width = '30rem';//semicolon missing
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < parseInt(document.querySelector('.score').textContent)) {
            highscore = parseInt(document.querySelector('.score').textContent);// typo in the selector for getting the score Instead of '.Score', it should be '.score'.
        }
        document.querySelector('.highscore').textContent = highscore;
        clearInterval(timerInterval); // Stop the timer

        // Show the time taken in highscore
        document.querySelector('.highscore').textContent = ` ${highscore} ( ${time[0]}:${time[1]})`;
    
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
        document.querySelector('.score').textContent--;
    } else {
        document.querySelector('.message').textContent = 'Too low ';
        document.querySelector('.score').textContent--;
    }

    if (parseInt(document.querySelector('.score').textContent) <= 0) {
        document.querySelector('.message').textContent = 'You lost the Game';
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenResult').textContent = secretNumber;//ID Mismatch "hiddneresult" no such ID was created in html insted it was "hiddenResult"
        this.style.backgroundColor = '#f1356d';
        document.querySelector('.score').textContent = '0'; // Set score to 0 to end the game
      
        // Change background color to required red as in video ()
        document.body.style.backgroundColor = '#E52B50';
    }
  
});

// Resetting the score, number , message, guess, background color

document.querySelector('.again').addEventListener('click', function () {
  score = 20; // 2nd
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  // Styles
  document.querySelector('body').style.backgroundColor = '#ffffff';  // background color white after reset
});