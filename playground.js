window.addEventListener("load", (event) => {
  let emojis = ['🤠', '🥳', '🫠','🥶'];


//  // stupid but fun
//  for (let i = 0; i < 200; i = i + 2) {
//    createCard(i);
//  }


for (let i = 0; i < emojis.length; i++) {
  createCard(emojis[i]);
}

});

function cardClickHandler_showcard(event) {
  this.classList.add('revealed');  // because classList is an ARRAY
  this.removeEventListener("click", cardClickHandler_showcard);
  this.addEventListener("click", cardClickHandler_hidecard);
}

function createCard(titi) {
  let toto = document.createElement('div');
  toto.className = 'card';

  // not sure if this is the propery way to generate DOM
  toto.innerHTML = '<div class="card-back"></div><div class="card-front">' + titi + '</div>';

  toto.addEventListener("click", cardClickHandler_showcard);
  
  document.querySelector('.table').appendChild(toto);
}

function cardClickHandler_hidecard(event) {
  this.classList.remove('revealed');  // because classList is an ARRAY
  this.removeEventListener("click", cardClickHandler_hidecard);
  this.addEventListener("click", cardClickHandler_showcard);
}