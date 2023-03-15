import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";



// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨, 화씨, 상태 정보가 들어간다
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 누를 때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  // weather의 초기값이 null 처음 ui를 그릴 때 null값을 인식을 못함 ! &&연산자 사용
  const [weather, setWeather] = useState(null);
  const cities = ['now','paris','new york', 'tokyo', 'seoul'];
  const [city, setCity] =useState('');
  const [loading,setLoading] = useState(false);
  
  // 2번째 방법
  // 프랍값으로 웨더버튼에 넘겨서 인자값으로 사용
  const handleCityChange =(city) => {
    if(city == "current"){
      setCity(null);
    } else {
      setCity(city);
    }
  }

  // 현재위치 호출 함수
  const getCurrentLocation= () => {
    // 자바스크립트 문서 참고 (현재위치 )
    navigator.geolocation.getCurrentPosition((positon)=>{
      let lat = positon.coords.latitude;
      let lon = positon.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
      
    });
  }
  // api 호출 함수 - 유닛을 추가할수 있음
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5e0b6fefbcb22aa7d9f241571b406f98&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    // 날씨 데이터를 넣어줌 state에
    setWeather(data);
    setLoading(false);
  }

  // 도시 이름별 데이터를 따로 가져옴
  const getWeatherBycity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5e0b6fefbcb22aa7d9f241571b406f98&units=metric`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

// 중요 포인트
  useEffect(()=>{
    // city가 빈값이면 처음 useEffect 실행
    if(city == "" ) {
      getCurrentLocation()
    }else if(city == 'now'){
      getCurrentLocation()
    }
    // 빈값이 아니면 클릭을 했을 때 밑에 함수 실행
    else {
      getWeatherBycity()
    }
    
  },[city])

  // 기존 city 값이 빈값이라 새로고침 오류가 뜸(useEffect 실행 방식 오류-)
  // UI가 그려지고 위에 useEffect 실행 후 밑에 useEffect 실행
  // 밑에 이펙트는 실행이 안되고 위에 유즈 이펙트가 실행되게 함 - 하나로 합쳐줌

  // useEffect(()=>{
  //    getWeatherBycity()
  //   },[city]);

  return (
    <div className="App">
      {loading ? ( 
      <div className='container'>
      <ClipLoader
        color="#f88c6b"
        loading={loading}
        size={150}
      /> 
      </div>
      )
    :(
      <div className='container'>
      <WeatherBox weather={weather} />
      <WeatherButton cities={cities} setCity = {setCity} />
      </div>
    )    
  }

      
    </div>
  );
}

export default App;
