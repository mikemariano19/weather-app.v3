// const dateAndTime: HTMLElement | null = document.getElementById('temperature')

// if (dateAndTime) {
//     dateAndTime.innerHTML = 'rooom-date'
// }


// btns?.addEventListener("click", () => {
// const cityInput: HTMLInputElement | null = document.getElementById('city') as HTMLInputElement;
// const dateAndTime: HTMLElement | null = document.getElementById('date') as HTMLElement;
// const temperature: HTMLElement | null = document.getElementById('temperature') as HTMLElement;
// const feelsLike: HTMLElement | null = document.getElementById('feels') as HTMLElement;
// const weatherDesc: HTMLElement | null = document.getElementById('desc') as HTMLElement;
// const locations: HTMLElement | null = document.getElementById('location') as HTMLElement;
// const humidity: HTMLElement | null = document.getElementById('humidity') as HTMLElement;
// const wind: HTMLElement | null = document.getElementById('wind') as HTMLElement;
// const country: HTMLElement | null = document.getElementById('country') as HTMLElement;
// const pressure: HTMLElement | null = document.getElementById('pressure') as HTMLElement;
// const icon: HTMLElement | null = document.getElementById('icon') as HTMLElement;

//     if (cityInput) {
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=dc0b2d1eb4fa8ffcf52f194470748c73`)
//             .then((response) => response.json())
//             .then((data) => {
//                 const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "December"];
//                 const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//                 const d: Date = new Date();
//                 const day: string = days[d.getDay()];
//                 let hr: number = d.getHours();
//                 let min: number = d.getMinutes();

//                 if (min < 10) {
//                     min = parseInt("0" + min.toString());
//                 }
//                 let ampm: string = "am";

//                 if (hr > 12) {
//                     hr -= 12;
//                     ampm = "pm";
//                 }
//                 const date: number = d.getDate();
//                 const month: string = months[d.getMonth()];
//                 const year: number = d.getFullYear();
//                 dateAndTime.innerHTML = `${month} ${date}, ${year}<br>${day} ${hr}:${min}${ampm}`;

//                 const temperatureData: string = `${Math.abs(data['main']['temp'] - 273.15).toPrecision(3)}°`;
//                 const feelsData: string = `Feels like ${Math.abs(data['main']['feels_like'] - 273.15).toPrecision(3)}°`;
//                 const weatherDescData: string = data['weather']['0']['description'];
//                 const locationData: string = data['name'];
//                 const humidityData: string = `Humidity: ${data['main']['humidity']}`;
//                 const windData: string = `Wind: ${data['wind']['speed']}`;
//                 const countryData: string = `Country: ${data['sys']['country']}`;
//                 const pressureData: string = `Pressure: ${data['main']['pressure']}`;
//                 const iconCode: string = data['weather']['0']['icon'];

//                 icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="" id="">`;
//                 temperature.innerHTML = temperatureData.toUpperCase();
//                 feelsLike.innerHTML = feelsData;
//                 weatherDesc.innerHTML = weatherDescData.toUpperCase();
//                 locations.innerHTML = locationData.toUpperCase();
//                 humidity.innerHTML = humidityData;
//                 wind.innerHTML = windData;
//                 country.innerHTML = countryData;
//                 pressure.innerHTML = pressureData;

//                 cityInput.value = '';
//                 console.log(data)
//             })
//     }
// })



function userWeather () {
    const cityInput: HTMLInputElement | null = document.getElementById('city') as HTMLInputElement;
    const dateAndTime: HTMLElement | null = document.getElementById('date') as HTMLElement;
    const temperature: HTMLElement | null = document.getElementById('temperature') as HTMLElement;
    const feelsLike: HTMLElement | null = document.getElementById('feels') as HTMLElement;
    const weatherDesc: HTMLElement | null = document.getElementById('desc') as HTMLElement;
    const locations: HTMLElement | null = document.getElementById('location') as HTMLElement;
    const humidity: HTMLElement | null = document.getElementById('humidity') as HTMLElement;
    const wind: HTMLElement | null = document.getElementById('wind') as HTMLElement;
    const country: HTMLElement | null = document.getElementById('country') as HTMLElement;
    const pressure: HTMLElement | null = document.getElementById('pressure') as HTMLElement;
    const icon: HTMLElement | null = document.getElementById('icon') as HTMLElement;

    if (cityInput) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=dc0b2d1eb4fa8ffcf52f194470748c73`)
            .then((response) => response.json())
            .then((data) => {
                const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "December"];
                const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const d: Date = new Date();
                const day: string = days[d.getDay()];
                let hr: number = d.getHours();
                let min: number = d.getMinutes();

                if (min < 10) {
                    min = parseInt("0" + min.toString());
                }
                let ampm: string = "am";

                if (hr > 12) {
                    hr -= 12;
                    ampm = "pm";
                }
                const date: number = d.getDate();
                const month: string = months[d.getMonth()];
                const year: number = d.getFullYear();
                dateAndTime.innerHTML = `${month} ${date}, ${year}<br>${day} ${hr}:${min}${ampm}`;

                const temperatureData: string = `${Math.abs(data['main']['temp'] - 273.15).toPrecision(3)}°`;
                const feelsData: string = `Feels like ${Math.abs(data['main']['feels_like'] - 273.15).toPrecision(3)}°`;
                const weatherDescData: string = data['weather']['0']['description'];
                const locationData: string = data['name'];
                const humidityData: string = `Humidity: ${data['main']['humidity']}`;
                const windData: string = `Wind: ${data['wind']['speed']}`;
                const countryData: string = `Country: ${data['sys']['country']}`;
                const pressureData: string = `Pressure: ${data['main']['pressure']}`;
                const iconCode: string = data['weather']['0']['icon'];

                icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="" id="">`;
                temperature.innerHTML = temperatureData.toUpperCase();
                feelsLike.innerHTML = feelsData;
                weatherDesc.innerHTML = weatherDescData.toUpperCase();
                locations.innerHTML = locationData.toUpperCase();
                humidity.innerHTML = humidityData;
                wind.innerHTML = windData;
                country.innerHTML = countryData;
                pressure.innerHTML = pressureData;

                cityInput.value = '';
                console.log(data)
            })
    }
}
