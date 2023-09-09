const apiKey = "UNDkYpzngDWTlMo961oDZdYYy4ayaePI2Y6PFhb1";

type Props = {
    camera: string
    date: string
}
export const getMarsPhotos = async ({camera, date}:Props) => {



    const apiUrl = `?earth_date=${date}&camera=${camera}&api_key=${apiKey}`;
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
// getMarsPhotos()
//     .then((data) => {
//         console.log("Фотографии Mars Rover:", data);
//     })
//     .catch((error) => {
//         console.error("Ошибка при получении фотографий Mars Rover:", error);
//     });