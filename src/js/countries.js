
import countriesTpl from "../templates/countries.hbs";
// import NewsApiService from "./fetchCountries";
import fetchCountries from './fetchCountries'
import debounce from "lodash.debounce";
import { error }  from '@pnotify/core';
import getRefs from './refs'

const refs = getRefs();
refs.searchForm.addEventListener('input', debounce(onSearch, 500));
 
function onSearch(e) {
  const searchQuery = e.target.value;
  // const form = e.currentTarget;
  // const searchQuery = form.input.query.value;
  // refs.articlesContainer.innerHTML = '';
  fetchCountries(searchQuery).then(appendCountriesMarkup).catch(searchError).finally(()=>searchQuery.reset());
}

function searchError( error ) {
   error({ text: 'Too many matches found.Please enter a more specific query!' });

}

function appendCountriesMarkup(countries) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', countriesTpl(countries))
}