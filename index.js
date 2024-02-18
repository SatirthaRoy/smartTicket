const seatLetters = 'ABCDEFGHIJ'.split('');

const seat2 = document.querySelector('.seat-seat2');
const seat4 = document.querySelector('.seat4');
seat4.innerHTML = `<div class="col-start-2 bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl"><img src="./images/driver seat.svg" alt=""></div>`;
seat2.innerHTML = `<div class="col-end-4"></div>`;

seatLetters.forEach(letter => {
  seat2.innerHTML += `
  <button class="py-5 text-center">${letter}</button>
  <button class="font-medium text-lg text-[#070b1780] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}1">${letter}1</button>
  <button class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}2">${letter}2</button>
  `

  seat4.innerHTML += `
  <button class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}3">${letter}3</button>
  <button class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}4">${letter}4</button>
  `
});


