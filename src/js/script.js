const cards = document.querySelectorAll('.cards__item');
const buyLink = document.querySelectorAll('.cards__text-link');
const cardText = document.querySelectorAll('.cards__text')
buyLink.forEach(function(link, i) {
  link.addEventListener('click', function() {
    var weight = cards[i].querySelector('.food-card__weight')
    cards[i].classList.toggle('food-card--selected')
    weight.classList.toggle('food-card__weight--selected')
  })
})

cards.forEach(function(card) {
  const weight = card.querySelector('.food-card__weight')
  const link = card.querySelector('.cards__text-link')
  card.addEventListener('click', function() {
    this.classList.toggle('food-card--selected')
    weight.classList.toggle('food-card__weight--selected')
  })
})
