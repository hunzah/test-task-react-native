import Axios from 'axios';

const API_KEY = 'UNDkYpzngDWTlMo961oDZdYYy4ayaePI2Y6PFhb1';

const fetchMarsPhotos = () => {
    const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
    const earthDate = '2015-6-3';

    // Формируем URL с параметрами
    const url = `${API_URL}?earth_date=${earthDate}&api_key=${API_KEY}`;

    Axios.get(url)
        .then((response) => {
            // Обработка успешного ответа от сервера
            console.log('Ответ от сервера:', response.data);
            // В response.data будет содержаться ответ от сервера
        })
        .catch((error) => {
            // Обработка ошибок
            console.error('Ошибка запроса:', error);
        });
};

// Вызываем функцию для отправки запроса
fetchMarsPhotos();
