export default class NewsApiService{

  constructor() {
    this.searchQuery = '';
    this.page = 1;
}
  fetchCountries() {
  console.log(this)
  const url = 'https://restcountries.eu/rest/v2/name/${this.searchQuery}?fields=name;capital;population;languages;flag';
  //const url ='https://restcountries.eu/rest/v2/name/${this.searchQuery}?fullText=true'
    return fetch(url)
      .then(response =>
               response.json())
     .then(data => {
       this.incrementPage()
              return data.countries;

        });
  }
  incrementPage() {
    this.page = 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}