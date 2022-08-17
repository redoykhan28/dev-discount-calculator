//field section1
document.getElementById('input-field').addEventListener('keyup', function (event) {

    const keys = event.target.value;

    const headText = document.getElementById('head1');
    headText.innerText = keys;

});

//field section2
document.getElementById('input-field3').addEventListener('keyup', function (event) {

    const keys = event.target.value;

    const headText = document.getElementById('head3');
    headText.innerText = keys;

    let bt = document.getElementById('btn');

    if (keys <= 100) {

        bt.removeAttribute('disabled');
    }

    else {

        bt.setAttribute('disabled', true);
    }

});

//button section

document.getElementById('btn').addEventListener('click', function () {

    let f1 = document.getElementById('input-field');
    let value = f1.value;

    let f2 = document.getElementById('input-field2');
    let value2 = f2.value;

    let f3 = document.getElementById('input-field3');
    let value3 = f3.value;

    if (value2 === 'DOM30') {

        let percentence = (value * value3) / 100;
        let parcentParse = parseFloat(percentence);

        document.getElementById('head2').innerText = ' $' + parcentParse;
    }

    else {

        document.getElementById('head2').innerText = ' Wrong Code';
    }

});