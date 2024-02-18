// bus seats render

const seatLetters = 'ABCDEFGHIJ'.split('');

const seat2 = document.querySelector('.seat-seat2');
const seat4 = document.querySelector('.seat4');
seat4.innerHTML = `<div class="col-start-2 bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl"><img src="./images/driver seat.svg" alt=""></div>`;
seat2.innerHTML = `<div class="col-end-4"></div>`;

seatLetters.forEach(letter => {
  seat2.innerHTML += `
  <button class="py-5 text-center">${letter}</button>
  <button class="seat font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}1">${letter}1</button>
  <button class="seat font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}2">${letter}2</button>
  `

  seat4.innerHTML += `
  <button class="seat font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}3">${letter}3</button>
  <button class="seat font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer" id="${letter}4">${letter}4</button>
  `
});

document.querySelector('form').addEventListener('submit', (e)=> {
  e.preventDefault();
})

function scrollToTickets () {
  const tickets = document.querySelector('#tickets');
  tickets.scrollIntoView({ behavior: 'smooth' });
}

// ----------------------------------------------------/////////////////----------------------------------------------------//////


// ticket array
let ticketsArr = [];

// seats functionality
const seats = document.querySelectorAll('.seat');
const seatCount = document.querySelector('#seat-count');
const leftSeats = document.querySelector('#left-seats');


// toogles color
function toogleCol (seat) {
  seat.classList.toggle('bg-[#F7F8F8]');
  seat.classList.toggle('text-[#03071280]');
  seat.classList.toggle('bg-[#1DD100]');
  seat.classList.toggle('text-white');
}

// submit prevets default
function prevD (e) {
  e.preventDefault();
}

// update seat table
function updateSeatTable () {
  const tBody = document.querySelector('tBody');
  console.log(tBody.innerHTML);
  tBody.innerHTML = '';
  ticketsArr.forEach(ticket => {
    tBody.innerHTML += `
    <tr>
      <th class="p-4 text-[#03071299] text-base font-normal">${ticket}</th>
      <th class="p-4 text-[#03071299] text-base font-normal">Economy</th>
      <th class="p-4 text-[#03071299] text-base font-normal">550</th>
    </tr>
    `
  });
}

// total price
function totalPrice () {
  const totalPrice = document.querySelector('#total-price');
  totalPrice.innerText = 0;
  totalPrice.innerText = ticketsArr.length * 550;
}

// grand price 
function grandPrice () {
  const totalPrice = document.querySelector('#grand-price');
  totalPrice.innerText = 0;
  totalPrice.innerText = ticketsArr.length * 550;
}

// disable submit button 
function makeSubmitDisable () {
  const submitButt = document.querySelector('#submit-button');
  const phoneNumber = document.querySelector('#phone');
  console.log(phoneNumber.value === '');
  submitButt.disabled = (ticketsArr.length !== 0 && phoneNumber.value !== '') ? false : true;
  if(submitButt.disabled == true) {
    submitButt.classList.remove('bg-[#1DD100]');
    submitButt.classList.add('bg-gray-300');
  } else {
    submitButt.classList.add('bg-[#1DD100]');
    submitButt.classList.remove('bg-gray-300');
  }
}

// run on first render
makeSubmitDisable();

// on click seats
seats.forEach(seat => {
  seat.addEventListener('click', ()=> {
    // tickets array toogling
    if(ticketsArr.includes(seat.id)) {
      ticketsArr = ticketsArr.filter(ticket => ticket !== seat.id);
      toogleCol(seat);
    } else {
      if(ticketsArr.length < 4) {
        ticketsArr.push(seat.id);
        toogleCol(seat);
      }
    }
    seatCount.innerText = ticketsArr.length;
    leftSeats.innerText = 40-ticketsArr.length;
    updateSeatTable();
    totalPrice();
    grandPrice();
    makeSubmitDisable();
    console.log(ticketsArr);
  })
})

