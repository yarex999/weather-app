import React from 'react'

function TimeAndDate(props){

    let weekDay = ['sunday','monday', 'tuesday', 'wednesday', 'thusday', 'friday', 'saturday'];
    function getYear(time,timezone){
        let finalyear = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getFullYear();
        if(finalyear < 10) finalyear = '0'+ finalyear;
        return finalyear;
       }

    function getMonth(time,timezone){
        let finalmonth = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getMonth() + 1;
        if(finalmonth < 10) finalmonth = '0'+ finalmonth;
        return finalmonth;
       }

    function getDate(time,timezone){
        let finalday = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getDate();
        if(finalday < 10) finalday = '0'+ finalday;
        return finalday;
       }

    function getDay(time,timezone){
        let finalday = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getDay();
        finalday = weekDay[finalday];
        return finalday;
       }

    function getHours(time,timezone){
        let finalhour = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getHours();
        if(finalhour < 10) finalhour = '0'+ finalhour;
        return finalhour;
       }
       
       
    function getMinutes(time,timezone){
        let finalMinute = new Date((new Date(time).getTime() + new Date(time).getTimezoneOffset() * 60000) + 1000 * timezone).getMinutes();
        if(finalMinute < 10) finalMinute = '0'+ finalMinute;
        return finalMinute;
       }


    let time = <span>{
        getHours(props.time, props.timezone)
        + ':' +
        getMinutes(props.time, props.timezone)
        }</span>

    let date = <span>{
        getDay(props.time, props.timezone)
        + ' ' +
        getDate(props.time, props.timezone)
        + '.' +
        getMonth(props.time, props.timezone)
        + '.' +
        getYear(props.time, props.timezone)
        }</span>

    return(<div className="weather__time-date">
        <p>the weather is actual on {time}</p>
        <p>today is {date}</p>
    </div>)
}

export default TimeAndDate