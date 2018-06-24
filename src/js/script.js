const cards = document.querySelectorAll('.cards__item');
const buyLink = document.querySelectorAll('.cards__text-link');
const cardText = document.querySelectorAll('.cards__text')
const stuff = document.querySelectorAll('.cards__text--stuffing')
const buy = document.querySelectorAll('.cards__text-buy')
buyLink.forEach(function(link, i) {
  link.addEventListener('click', function() {
    var weight = cards[i].querySelector('.food-card__weight')
    cards[i].classList.toggle('food-card--selected')
    weight.classList.toggle('food-card__weight--selected')
  })
})

cards.forEach(function(card,i) {
  const weight = card.querySelector('.food-card__weight')

  card.addEventListener('click', function() {
    this.classList.toggle('food-card--selected')
    weight.classList.toggle('food-card__weight--selected')
    stuff[i].classList.toggle('js-inactive')
    buy[i].classList.toggle('js-inactive')
  })
})
