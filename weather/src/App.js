import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';



// 1. 앱이 실행되자마자 현재위치 기반의 날씨가 보인다
// 2. 날씨정보에는 도시, 섭씨, 화씨, 상태 정보가 들어간다
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 누를 때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  // 현재위치 호출 함수
  const getCurrentLocation= () => {
    // 자바스크립트 문서 참고 (현재위치 )
    navigator.geolocation.getCurrentPosition((positon)=>{
      let lat = positon.coords.latitude;
      let lon = positon.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    });
  }
  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={5e0b6fefbcb22aa7d9f241571b406f98}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }


  useEffect(()=>{
    getCurrentLocation()
  },[])

  return (
    <div className="App">
      hihihihi
    </div>
  );
}

export default App;
