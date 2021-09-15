
import countriesTpl from "../templates/countries.hbs";
// import NewsApiService from "./fetchCountries";
import fetchCountries from './fetchCountries'
import  debounce  from "lodash.debounce";
const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles'),
}
// const newsApiServise = new NewsApiService();
// refs.searchForm.addEventListener('input', debounce(onSearch, 500));

// function onSearch(e) {

//    newsApiServise.query = e.currentTarget;
//   newsApiServise.resetPage();
//   newsApiServise.fetchCountries().then(appendCountriesMarkup);
// }
 refs.searchForm.addEventListener('input', debounce(onSearch, 500));
function onSearch(e) {
  const searchQuery = e.target.value;
  fetchCountries(searchQuery).then(appendCountriesMarkup);
}
function appendCountriesMarkup(countries) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', countriesTpl(countries))
}