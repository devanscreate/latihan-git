const counterDisplay = document.getElementById('counter');
const btnTambah = document.getElementById('btn-tambah');

let count = 0;

btnTambah.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = count;
});