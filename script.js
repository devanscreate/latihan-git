const counterDisplay = document.getElementById('counter');
const btnTambah = document.getElementById('btn-tambah');
const btnReset = document.getElementById('btn-reset');
const btnKurang = document.getElementById('btn-kurang');

let count = 0;

btnTambah.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});

btnReset.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = count;
});

btnKurang.addEventListener('click', () => {
  count--;
  counterDisplay.textContent = count;
});