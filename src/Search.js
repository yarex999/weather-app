import React, {useState} from 'react';


function Search(props) {

 const [val, setVal] = useState(null);

// // the list of cities to choose
//  const [cities, setCities] = useState(null);
//  const [choiceList, setChoiceList] = useState(null);

// async function getCities(){
//   let response = await fetch('https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0/query?where=1%3D1&outFields=CITY_NAME&outSR=4326&f=json');
//   let data = await response.json()
//  if(!cities) setCities(await data.features);
 
//  };


// console.log(cities)

function typingSearch(event){
 setVal(event.target.value);
//  let elemNum = 0;
// setChoiceList(cities.map(elem => {
//    let element = elem.attributes.CITY_NAME.toLowerCase();
//    let value = event.target.value.toLowerCase();
//    console.log(value)
//    if(element.startsWith(value) && elemNum < 10){
//     elemNum+=1; 
//     return <p onClick={()=> event.target.value = element}>{element}</p>
//    }
//  }));
}


function changeCityVal(event){
  if(event.key==='Enter'){
    props.getData(val);
   setVal(null)
   event.target.blur();
  }
  
}

 
  
    return (
    <div className={props.data?'search-form':'search-form start'}>
      <div className="search-form__inner">
       <input
        type="text" 
        value={val? val: ''} 
        onChange={(e) => typingSearch(e)} 
        onKeyPress={(e)=>changeCityVal(e)} 
       />
       <div className="search-form__symbol">
         <svg className="search-form__cloud">
           <use xlinkHref="#cloud" />
         </svg>
         <svg className="search-form__lens">
           <use xlinkHref="#lens" />
         </svg>
       </div>
       {/* <div>
         { {choiceList && props.edit ? choiceList : ''}}
       </div> */}

      </div>
    </div>
      
    );
  }
  
  export default Search