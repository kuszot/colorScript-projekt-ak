const toggleButton3 = document.querySelector('.script3-toggle');

toggleButton3.addEventListener('click', () => {
    toggleButton3.classList.toggle('script3-toggle-active');
    document.querySelector('.script3').classList.toggle('script3-active');
});

const calculateBtn = document.querySelector('.script3-calculate');
const clearBtn = document.querySelector('.script3-clear');

calculateBtn.addEventListener('click', () => {
    const num1Input = document.querySelector('#number1');
    const num2Input = document.querySelector('#number2');
    const result = document.querySelector('.script3-result');

    const val1 = num1Input.value;
    const val2 = num2Input.value;

    if (val1 === '' || val2 === '') {
        result.textContent = 'Proszę wypełnić oba pola!';
        return;
    }

    const a = parseFloat(val1);
    const b = parseFloat(val2);

    if (isNaN(a) || isNaN(b)) {
        result.textContent = 'Wpisz poprawne liczby!';
        return;
    }

    // Obliczenia
    const suma = a + b;
    const roznica = a - b;
    const iloczyn = a * b;
    const iloraz = b !== 0 ? (a / b).toFixed(2) : 'Nie dziel przez 0!';

    result.innerHTML = `
        Suma: ${suma}<br>
        óżnica: ${roznica}<br>
        Iloczyn: ${iloczyn}<br>
        Iloraz: ${iloraz}
    `;
});

clearBtn.addEventListener('click', () => {
    document.querySelector('#number1').value = '';
    document.querySelector('#number2').value = '';
    document.querySelector('.script3-result').textContent = '';
});
