// export default class NewsApiService{
  
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }
//   fetchCountries() {
//     const url = 'https://restcountries.eu/rest/v2/name/${this.searchQuery}/';
//   console.log(this)
//     return fetch(url)
//       .then(response =>
//                response.json())
//      .then(data => {
//        this.incrementPage()
//               return data.countries;

//         });
//   }
//   incrementPage() {
//     this.page = 1;
//   }
//   resetPage() {
//     this.page = 1;
//   }
//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
export default fetchCountries
const BASE_URL = 'https://restcountries.eu/rest/v2/name'

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(response => response.json())
}
