import React from 'react';
import WeatherComponent from './WeatherComponent.js';
import Settings from './Settings.js';
import TimeAndDate from './TimeAndDate.js';




class Main extends React.Component{
    constructor(props){
      super(props);
      this.state = {
      data : props.data,
      city: props.data.name,
      weatherOverview: props.data.weather[0].main,
      temperature: Math.round(props.data.main.temp - 273.15) + '°C',
      temperatureMax: Math.round(props.data.main.temp_max - 273.15) + '°C',
      temperatureMin: Math.round(props.data.main.temp_min - 273.15) + '°C',
      feels_like: Math.round(props.data.main.feels_like - 273.15) + '°C',
      humidity:props.data.main.humidity,
      pressure:props.data.main.pressure + ' hPa',
      windSpeed: props.data.wind.speed + ' m/s',
      windDegree: props.data.wind.deg,
      visibility: props.data.visibility,
      sunrise: new Date(props.data.sys.sunrise * 1000),
      sunset: new Date(props.data.sys.sunset * 1000),
      timezone: props.data.timezone,
      openEditor: false,
      changeTemp: false,
      changePress:false,
      changeWindSpeed:false,

      }
this.getHours = this.getHours.bind(this);
this.getMinutes = this.getMinutes.bind(this);
this.setState = this.setState.bind(this);
    }
  
  static getDerivedStateFromProps(nextProps, prevProps){
    console.log(prevProps.data);
    console.log(nextProps.data);
    
    if(JSON.stringify(nextProps.data)!== JSON.stringify(prevProps.data)){
      return{
        data: nextProps.data,
        city: nextProps.data.name,
        weatherOverview: nextProps.data.weather[0].main,
        temperature: Math.round(nextProps.data.main.temp - 273.15) + '°C',
        temperatureMax: Math.round(nextProps.data.main.temp_max - 273.15) + '°C',
        temperatureMin: Math.round(nextProps.data.main.temp_min - 273.15) + '°C',
        feels_like: Math.round(nextProps.data.main.feels_like - 273.15) + '°C',
        humidity: nextProps.data.main.humidity,
        pressure: nextProps.data.main.pressure + ' hPa',
        windSpeed: nextProps.data.wind.speed + ' m/s',
        windDegree: nextProps.data.wind.deg,
        visibility: nextProps.data.visibility,
        sunrise: new Date(nextProps.data.sys.sunrise * 1000),
        sunset: new Date(nextProps.data.sys.sunset * 1000),
        timezone: nextProps.data.timezone,
        openEditor: false,
        changeTemp: false,
        changePress:false,
        changeWindSpeed:false,
        
      }
    }
    return null
  }

getHours(time,timezone){
 let finalhour = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getHours();
 if(finalhour < 10) finalhour = '0'+ finalhour;
 return finalhour;
}


getMinutes(time,timezone){
 let finalMinute = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getMinutes();
 if(finalMinute < 10) finalMinute = '0'+ finalMinute;
 return finalMinute;
}

  render(){
console.log(this.state)
    return (<div className='weather'>

      <div className="weather__city">
        <h1>{this.state.city}</h1>
      </div>

      <div className="weather__overview">
        <p>{this.state.weatherOverview}</p>
      </div>

      <div className="weather__temperature">
        <h1>{this.state.temperature}</h1>
      </div>

      <div className="weather__feels-like">
        <p> <i className="fas fa-thermometer-three-quarters"></i> feels like: {this.state.feels_like}</p>
      </div>

      <div className="weather__temperature-h-l">
        <p> <i className="fas fa-temperature-high"></i> H: {this.state.temperatureMax}</p>
        <p> <i className="fas fa-temperature-low"></i> L: {this.state.temperatureMin}</p>
      </div>

      <div className="weather-details">
        <WeatherComponent icon={<i className="fas fa-tint"></i>} name={"humidity"} value={this.state.humidity + " %"} />
        <WeatherComponent icon={<i className="fas fa-tachometer-alt"></i>} name={"pressure"} value={this.state.pressure} />
        <WeatherComponent icon={<i className="fas fa-sun"></i>} name={"sunrise"} value={this.getHours(this.state.sunrise,this.state.timezone) + ':' + this.getMinutes(this.state.sunrise,this.state.timezone)} />
        <WeatherComponent icon={<i className="fas fa-wind"></i>} name={" wind"} value={this.state.windSpeed} />
        <WeatherComponent icon={<i className="fas fa-eye"></i>} name={"visibility"} value={Math.floor(this.state.visibility/1000) + ' km'} />
        <WeatherComponent icon={<i className="fas fa-moon"></i>} name={"sunset"} value={this.getHours(this.state.sunset,this.state.timezone) + ':' + this.getMinutes(this.state.sunset,this.state.timezone)} />

      </div>
      
      <Settings data={this.state} changeData={this.setState} />
      <TimeAndDate time={this.state.data.dt*1000} timezone={this.state.data.timezone} />
      
      </div>)
  }
}

  export default Main;