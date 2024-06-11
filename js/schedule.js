function selectConcert(name, date, price) {
    sessionStorage.setItem('concertName', name);
    sessionStorage.setItem('concertDate', date);
    sessionStorage.setItem('concertPrice', price);
    window.location.href = 'book.html';
}