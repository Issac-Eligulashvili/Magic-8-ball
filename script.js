function shakeMagic8Ball() {
  let eightBallDiv = document.querySelector('#response-image');
  eightBallDiv.classList.remove('move');
  eightBallDiv.classList.remove('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight');

  const question = prompt('Ask the Magic 8-Ball a question:');

  if (question === null) {
    document.querySelector('#response-text').innerText = 'Please ask a question!'
    document.querySelector('#response-text').classList = 'text-danger'
    document.querySelector('#response-image').src = '#BAD/BROKENIMG'
  }

  if (!question.trim()) {
    alert('Please enter a valid question!')
    return
  }

  let randomNumber = Math.floor(Math.random() * 8);

  let answer;

  switch (randomNumber) {
    case 0:
      answer = 'It is certain'
      eightBallDiv.classList.add('one','move');
      break;
    case 1:
      answer = 'It is decidedly so'
      eightBallDiv.classList.add('two','move');
      break;
    case 2:
      answer = 'Reply hazy try again'
      eightBallDiv.classList.add('three','move');
      break;
    case 3:
      answer = 'Do not count on it'
      eightBallDiv.classList.add('four','move');
      break;
    case 4:
      answer = 'Cannot Predict Now'
      eightBallDiv.classList.add('five','move');
      break;
    case 5:
      answer = 'My sources say no'
      eightBallDiv.classList.add('six','move');
      break;
    case 6:
      answer = 'Outllook not so good'
      eightBallDiv.classList.add('seven','move');
      break;
    case 7:
      answer = 'Signs point to yes'
      eightBallDiv.classList.add('eight','move');
      break;
  }

  const responseText = document.querySelector("#response-text")
  responseText.innerText = answer;
}