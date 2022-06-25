import renderFavouritesPage from './pages/Favourites';
import $ from './utils/$';

const token = localStorage.getItem('token');

if (!token) {
  location.href = 'login.html';
}

const app = <HTMLDivElement>$('#app');
renderFavouritesPage(app);