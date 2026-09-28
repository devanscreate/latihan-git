const counterDisplay = document.getElementById('counter');
const btnTambah = document.getElementById('btn-tambah');
const btnReset = document.getElementById('btn-reset');

let count = 0;

btnTambah.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

btnReset.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});