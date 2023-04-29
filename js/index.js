function layout() {
  /* body */
  const body = document.querySelector('body');
  body.classList.add('body');

  /* textarea */
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');

  /* keyboard */
  const keyboard = document.createElement('div');
  keyboard.setAttribute('id', 'keyboard');

  /* block info */
  const blockInfo = document.createElement('div');
  blockInfo.classList.add('blockInfo');
  const os = document.createElement('p');
  os.classList.add('os');
  os.textContent = 'Клавиатура создана в операционной системе Windows';
  const langSwitch = document.createElement('p');
  langSwitch.classList.add('langSwitch');
  langSwitch.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
  blockInfo.append(os, langSwitch);

  /* вставляет элемент */
  body.append(textarea, keyboard, blockInfo);
}
layout();

const enKeysArrey = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\'', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
const ruKeysArrey = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\'', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'],
];
console.log(ruKeysArrey);

function keyboardInitialization() {
  let out = '';
  enKeysArrey.forEach((elem) => {
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === ' ') {
        out += `<div class="key space">${elem[i]}</div>`;
      } else if (elem[i] === 'backspace') {
        out += `<div class="key backspace">${elem[i]}</div>`;
      } else if (elem[i] === 'Tab') {
        out += `<div class="key tab">${elem[i]}</div>`;
      } else if (elem[i] === 'CapsLock') {
        out += `<div class="key capslock">${elem[i]}</div>`;
      } else if (elem[i] === 'Enter') {
        out += `<div class="key enter">${elem[i]}</div>`;
      } else if (elem[i] === 'Shift') {
        out += `<div class="key shift">${elem[i]}</div>`;
      } else if (elem[i] === 'Ctrl' && i === elem.length - 1) {
        out += `<div class="key ctrl">${elem[i]}</div>`;
      } else {
        out += `<div class="key">${elem[i]}</div>`;
      }
    }
  });
  document.querySelector('#keyboard').innerHTML = out;
}
keyboardInitialization();
