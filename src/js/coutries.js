
import countriesTpl from "../templates/countries.hbs";
import NewsApiService from "./fetchCountries";
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles'),
}
const newsApiServise = new NewsApiService();
refs.searchForm.addEventListener('input', onSearch)

function onSearch(e) {
  //e.preventDeault();
  newsApiServise.query = e.currentTarget.elements.query.value;
  newsApiServise.resetPage();
  newsApiServise.fetchCountries().then(appendCountriesMarkup);
}
function appendCountriesMarkup(countries) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', countriesTpl(countries))
}