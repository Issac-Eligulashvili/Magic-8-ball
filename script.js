function shakeMagic8Ball() {
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

    let answer, image, color;

    switch(randomNumber){
        case 0 :
          answer = 'It is certain'
          break;
        case 1 :
          answer = 'It is decidedly so'
          break;
        case 2 :
          answer = 'Reply hazy try again'
          break;
        case 3 :
          answer = 'My sources say no'
          break;
        case 4 :
          answer = 'Outlook not so good'
          break;
        case 5 :
          answer = 'Signs point to yes'
          break;
        case 6 :
          answer = 'It is certain'
          break;
        case 7 :
          answer = 'It is certain'
          break;  
    }

    const responseText = document.querySelector("#response-text")
    responseText.innerText = answer;
}