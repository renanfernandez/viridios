import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selected, setSelected] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
 
  const getData = () => {
    fetch(
      './data/data.json',
      {headers: {
        'Content-Type' : 'application/json',
        "Accept" : 'application/json'
      }}
    ).then(
      response => {
        return response.json();
      }
    ).then(
      jsonData => {
        setData(jsonData.data)
        let arr = jsonData.data.map(item => item.Country)
        setCountries(arr);
      }
    )
  } 

  const handleChange = (e) => {
    let selectedCountries = selected;
    let newCountry = e.target.value;

    if(!selectedCountries.includes(newCountry)){
      selectedCountries.push(newCountry);
    } else {
      selectedCountries.splice(selectedCountries.indexOf(newCountry, 1))
    }
    setSelected(selectedCountries)

  }

  useEffect(() => {
    getData()
  }, [])


  // useEffect(() => {

  //   let newSelect = selected.map(item => 
  //     data.filter(country => country.Country === item)
  //   )     
    
  //   console.log(selected);    

  //   setFilteredCountries(newSelect)

  // }, [selected, data])

    useEffect(() => {

    console.log('render')

  }, [selected])


  return (
    <div className='main'>

      <div className="sidebar">
        {
          countries && countries.length > 0 && countries.map((item) => <div><input type="checkbox" onChange={ () => handleChange} value={item} />{item}</div>)
        }        
      </div> 

      <div className="dashboard">
        {selected}

        <div className="dashboard__body">
          {selected.length > 0 && filteredCountries.length > 0 && filteredCountries.map((item) => 
            <div className="dashboard__row">
              <div className="dashboard__column">{item["Country"]}</div>
              <div className="dashboard__column">{item["id"]}</div>
              <div className="dashboard__column">{item["2020 SDG Index Score"]}</div>
              <div className="dashboard__column">{item["2020 SDG Index Rank"]}</div>
              <div className="dashboard__column">{item["Regional Score (0-100)"]}</div>
              <div className="dashboard__column">{item["Regions used for the SDR"]}</div>
              <div className="dashboard__column">{item["Goal 1 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 2 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 3 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 4 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 5 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 6 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 7 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 8 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 9 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 10 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 11 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 12 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 13 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 14 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 15 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 16 Dash"]}</div>
              <div className="dashboard__column">{item["Goal 17 Dash"]}</div>
            </div>

          )}          
        </div>

      </div>
    </div>
  );
}

export default App;
