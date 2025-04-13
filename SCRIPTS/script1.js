const toggleButton = document.querySelector('.script1-toggle');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('script1-toggle-active');
    document.querySelector('.script1').classList.toggle('script1-active');
});

const checkButton = document.querySelector('.script1-check');
const clearButton = document.querySelector('.script1-clear');

checkButton.addEventListener('click', () => {
    const aInput = document.querySelector('#a');
    const bInput = document.querySelector('#b');
    const cInput = document.querySelector('#c');
    const resultDiv = document.querySelector('.script1-result');

    let calculate = true;

    const aVal = aInput.value.trim();
    const bVal = bInput.value.trim();
    const cVal = cInput.value.trim();

    if (aVal === '') {
        aInput.value = 'Ups pozostawiłeś puste pole';
        calculate = false;
    }
    if (bVal === '') {
        bInput.value = 'Ups pozostawiłeś puste pole';
        calculate = false;
    }
    if (cVal === '') {
        cInput.value = 'Ups pozostawiłeś puste pole';
        calculate = false;
    }

    const a = parseFloat(aVal);
    const b = parseFloat(bVal);
    const c = parseFloat(cVal);

    if (aVal !== '' && isNaN(a)) {
        aInput.value = 'UPS wpisałeś wartość niebędącą liczbą';
        calculate = false;
    }
    if (bVal !== '' && isNaN(b)) {
        bInput.value = 'UPS wpisałeś wartość niebędącą liczbą';
        calculate = false;
    }
    if (cVal !== '' && isNaN(c)) {
        cInput.value = 'UPS wpisałeś wartość niebędącą liczbą';
        calculate = false;
    }

    if (calculate && a === 0) {
        aInput.value = 'Hm... To nie jest równanie kwadratowe, bo a=0';
        calculate = false;
    }

    if (calculate) {
        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            resultDiv.textContent = 'Brak rozwiązań';
        } else if (delta === 0) {
            const x = (-b / (2 * a)).toFixed(2);
            resultDiv.textContent = `Rozwiązanie: x = ${x}`;
        } else {
            const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
            const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
            resultDiv.textContent = `Rozwiązania: x₁ = ${x1}, x₂ = ${x2}`;
        }
    }
});

clearButton.addEventListener('click', () => {
    document.querySelector('#a').value = '';
    document.querySelector('#b').value = '';
    document.querySelector('#c').value = '';
    document.querySelector('.script1-result').textContent = '';
});