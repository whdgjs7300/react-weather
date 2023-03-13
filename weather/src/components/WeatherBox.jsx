

const WeatherBox = ({weather }) => {
    console.log(weather)

    return ( 
        <div className="weather-box">
            <div>{weather && weather.name
            // 혹은 weather?.name 사용가능
            }</div>
            <h2>{weather?.main.temp} / 화씨</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
}

export default WeatherBox;