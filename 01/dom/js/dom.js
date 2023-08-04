console.log(document.querySelector('#first-heading'));
console.log(document.querySelector('#second-heading'));

//
// document.querySelectorAll('.list')
//   .forEach((e) => console.log(e.textContent));

const listElement = document.querySelectorAll('.list');
for (const li of listElement) {
  console.log(li.textContent);
}

const btnEl = document.querySelector('#add-btn');
btnEl.addEventListener('click', () => {
  window.alert('ボタンクリック！！');
});
