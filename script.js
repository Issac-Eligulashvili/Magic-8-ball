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
}