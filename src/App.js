import React, {useState} from 'react';
import Main from './Main.js';
import Search from './Search.js';
import './App.scss';








function App() {


  const [data, setData] = useState(null);


  async function getData(cityName){
    
      const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName +'&appid=c3d467c5c628f384f17f356b16b776d1';
    const response = await fetch(url);
    console.log(response)
    if(response.ok){
      const obj = await response.json();
    setData( await obj);
    console.log( new Date((new Date(obj.dt*1000).getTime() + new Date(obj.dt*1000).getTimezoneOffset() * 60000) + 1000 * obj.timezone).getHours());

    console.log(obj);
    } else {
      alert('try another city')
    }
    
     
    
   
  }


console.log(data)

// let sunrise = (time, timezone) => {
//   let d = new Date(time*1000)
//   let localTime = d.getTime()
//   let localOffset = d.getTimezoneOffset() * 60000
//   let utc = localTime + localOffset
//   let time2 = utc + (1000 * timezone)
//   let final = new Date(time2);
// return final;
// }

// let sunrise = new Date((new Date(obj.sys.sunrise*1000).getTime() + new Date(obj.sys.sunrise*1000).getTimezoneOffset() * 60000) + 1000 * obj.timezone);
let containerClass;

(function getClass() {
  if(data){
    let weather = data.weather[0].main;
  console.log('w:', weather);
  let currTime = new Date((new Date(data.dt * 1000).getTime() + new Date(data.dt * 1000).getTimezoneOffset() * 60000) + 1000 * data.timezone).getHours()
  console.log(currTime);
  let sunSetTime = new Date((new Date(data.sys.sunset * 1000).getTime() + new Date(data.sys.sunset * 1000).getTimezoneOffset() * 60000) + 1000 * data.timezone).getHours()
  console.log(sunSetTime);
  let sunRiseTime = new Date((new Date(data.sys.sunrise * 1000).getTime() + new Date(data.sys.sunrise * 1000).getTimezoneOffset() * 60000) + 1000 * data.timezone).getHours()
  console.log(sunRiseTime);
  if(weather == 'Clear' && (currTime < sunSetTime && currTime > sunRiseTime)){
    return containerClass = 'container clear-sky_day'
  }else if(weather == 'Clear' && (currTime > sunSetTime ||currTime<sunRiseTime)){
    return containerClass = 'container clear-sky_night'
  }else if(weather == 'Clouds' || weather == 'Snow' || weather == 'Drizzle' || weather == 'Rain'|| weather == 'Mist'){
    return containerClass = 'container rainy'
  }
  }
  

})();

  return (
    <div className={containerClass}> 
      <Search data={data} getData={getData} />
      {data? <Main data={data} />: ''}
    </div>
  );
}

export default App;
