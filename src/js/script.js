const cards = document.querySelectorAll('.cards__item');
const weight = document.querySelectorAll('.food-card__weight')
console.log(weight)
cards.forEach(function(card) {
  const weight = card.querySelector('.food-card__weight')
  card.addEventListener('click', function() {
    this.classList.toggle('food-card--selected')
    weight.classList.toggle('food-card__weight--selected')
  })
})
