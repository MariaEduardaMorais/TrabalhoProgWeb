// Exercício 1
function changeBackgroundColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5FF33', '#FF33F6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Exercício 2
function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemText = itemInput.value.trim();
    if (itemText !== '') {
        const li = document.createElement('li');
        li.textContent = itemText;
        document.getElementById('itemList').appendChild(li);
        itemInput.value = ''; // Limpa o campo de entrada
    }
}

// Exercício 3
function toggleText() {
    const text = document.getElementById('textToToggle');
    const button = document.querySelector('#exercise3 button');
    
    if (text.style.display === 'none') {
        text.style.display = 'block';
        button.textContent = 'Ocultar';
    } else {
        text.style.display = 'none';
        button.textContent = 'Mostrar';
    }
}

// Exercício 5
let counter = 0;
function incrementCounter() {
    counter++;
    document.getElementById('clickCounter').textContent = counter;
}

// Exercício 6
function toggleLight() {
    const light = document.getElementById('light');
    light.classList.toggle('on');
}
