var testo = document.getElementById('text');
var testoDue = '';
for (var i = 1; i < 101; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
        testoDue += '<li>FizzBuzz</li>'
    } else if (i % 3 == 0 && i % 5 != 0) {
        console.log('Fizz');
        testoDue += '<li>Fizz</li>'
    } else if (i % 5 == 0 && i % 3 != 0) {
        console.log('Buzz')
        testoDue += '<li>Buzz</li>'
    } else {
        console.log(i)
        testoDue += '<li>' + i + '</li>'
    }
}

testo.innerHTML = testoDue;