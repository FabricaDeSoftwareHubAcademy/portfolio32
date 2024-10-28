const background = document.querySelector('.background-codes');

for (let i = 0; i < 100; i++) {
    const codeColumn = document.createElement('div');
    codeColumn.classList.add('code-column');
    codeColumn.style.left = `${Math.random() * 100}vw`;
    codeColumn.style.animationDuration = `${Math.random() * 2 + 10}s`;
    background.appendChild(codeColumn);

    for (let j = 0; j < 20; j++) {
        const codeChar = document.createElement('span');
        codeChar.textContent = Math.floor(Math.random() * 2);
        codeColumn.appendChild(codeChar);
    }
}