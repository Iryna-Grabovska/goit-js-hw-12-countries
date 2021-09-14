const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles'),
}

refs.searchForm.addEventListener('input', onSearch)
console.log(onSearch)
function onSearch(e) {
  e.preventDeault();
  const searchQuery = e.currentTarget.elements.query.value;
  const url = 'https://restcountries.eu/rest/${searchQuery}'
  //let params = '/v2/${searchQuery}';
  
  fetch(url, options)
    .then(response => response.json())
    .then(console.log);
    
}