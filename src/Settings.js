import React, {useState} from 'react';

function Settings(props){


 

function tempreture(){
console.log(props.data.temperature) 
props.changeData({changeTemp: !props.data.changeTemp})
console.log(props.data.changeTemp)
if(props.data.changeTemp && (props.data.temperature).toString().split('').indexOf('C') === -1){
   props.changeData({
       temperature: Math.round((parseFloat(props.data.temperature)- 32) * 5/9) + "°C",
       temperatureMax: Math.round((parseFloat(props.data.temperatureMax)- 32) * 5/9) + "°C",
       temperatureMin: Math.round((parseFloat(props.data.temperatureMin)- 32) * 5/9) + "°C",
       feels_like: Math.round((parseFloat(props.data.feels_like)- 32) * 5/9) + "°C",
    }) 
} else if(!props.data.changeTemp){
   props.changeData({
       temperature: Math.round(parseFloat(props.data.temperature)*9/5 + 32) + "°F",
       temperatureMax: Math.round(parseFloat(props.data.temperatureMax)*9/5 + 32) + "°F",
       temperatureMin: Math.round(parseFloat(props.data.temperatureMin)*9/5 + 32) + "°F",
       feels_like: Math.round(parseFloat(props.data.feels_like)*9/5 + 32) + "°F",
    }) 
}
    
}

function pressure(){
    console.log(props.data.changePress)
    console.log(props.data.pressure)
    props.changeData({changePress: !props.data.changePress})
    if(props.data.changePress){
        props.changeData({
            pressure: Math.round(parseFloat(props.data.pressure) / 0.75) + ' hPa'
        })
    }else if(!props.data.changePress){
        props.changeData({
            pressure: Math.round(parseFloat(props.data.pressure) *0.75) + ' mmHg'
        })
    }
}
function windSpeed(){
    console.log(props.data.changeWindSpeed)
    console.log(props.data.windSpeed)
    props.changeData({changeWindSpeed:!props.data.changeWindSpeed})
    if(props.data.changeWindSpeed){
        props.changeData({
            windSpeed: (parseFloat(props.data.windSpeed,2) / 3.6).toFixed(1) + ' m/s'
        })
    }else if(!props.data.changeWindSpeed){
        props.changeData({
            windSpeed: (parseFloat(props.data.windSpeed,2) *3.6).toFixed(1) + ' km/h'
        })
    }
}


    return(
        <div className={props.data.openEditor?'settings open':"settings"} >
           <div className={props.data.openEditor? 'settings__menu open': 'settings__menu'}>
               <h2>Settings</h2>
               <div className='settings__menu-item' >
                   <p>Celsius</p>
                  <label className='settings__menu-item-inner'>
              
                    <input type='checkbox' checked={props.data.changeTemp} onChange={tempreture}/>
               
                    <div>
                        <span></span>
                    </div>

                </label>
                  <p>Fahrenheit</p>
               </div>
               
    
               <div className='settings__menu-item' >
                 <p>hPa</p>
                 <label  className='settings__menu-item-inner'>
                    <input type='checkbox' checked={props.data.changePress} onChange={pressure}/>
                    <div>
                        <span></span>
                    </div>
                 </label>
                 <p>mmHg</p>
               </div>
    
               <div className='settings__menu-item'>
                 <p>m/s</p>
                 <label className='settings__menu-item-inner'>
                    <input type='checkbox' checked={props.data.changeWindSpeed} onChange={windSpeed}/>
                    <div>
                        <span></span>
                    </div>
                 </label>
                 <p>km/h</p>
               </div>

            </div>

            
            <label className="settings__button">
                <input type="checkbox"  onClick={()=>props.changeData({openEditor: !props.data.openEditor})} checked={props.data.openEditor? true: false} />
              <div className="settings__button-design-item ">
                  <i className='fas fa-cog'></i>
              </div>
            </label>
        </div>
    )
}

export default Settings