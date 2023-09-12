export const dayMonthFormatChanger = (value) => {
    const dateObject = new Date(value);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    return `${year}-${month}-${day}`;
}

export  const yearMonthFormatDate = (inputDateStr) => {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const parts = inputDateStr.split('-');
    const day = parts[2];
    const month = months[parseInt(parts[1]) - 1];
    const year = parts[0];

    return `${day} ${month}, ${year}`;
}