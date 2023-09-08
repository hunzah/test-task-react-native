const apiKey = "UNDkYpzngDWTlMo961oDZdYYy4ayaePI2Y6PFhb1";

const getMarsPhotos = async () => {
    const earthDate = new Date();
    earthDate.setDate(earthDate.getDate() - 1);
    const formattedEarthDate = earthDate.toISOString().split('T')[0];

    const camera = "NAVCAM";

    const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedEarthDate}&camera=${camera}&api_key=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Ошибка при выполнении запроса");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Ошибка:", error);
        throw error;
    }
};

// Вызов функции для получения фотографий Mars Rover с камеры Navigation Camera за вчерашний день
getMarsPhotos()
    .then((data) => {
        console.log("Фотографии Mars Rover:", data);
    })
    .catch((error) => {
        console.error("Ошибка при получении фотографий Mars Rover:", error);
    });
