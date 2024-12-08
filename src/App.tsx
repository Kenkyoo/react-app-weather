import { useEffect, useState } from 'react';
import axios from 'axios';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css'

import Card from './components/card';
import Search from './components/search';

interface Weather {
  name: string;
  weather: {
    description: string;
    main: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
    sea_level: number;
  };
  wind: {
    gust: number;
  };
  sys: {
    country: string;
  };
}

interface FormState {
  city: string;
  units: 'metric' | 'imperial';
}


export default function App() {

  const [form, setForm] = useState<FormState>({
    city: '',
    units: 'imperial',
  });
  const [weather, setWeather] = useState<Weather | null>(null);
  
async function fetchData() {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?', {
      params : {
        appid: "f185a144d581e8f34f30c1c9cda3cb73",
        q: form.city,
        units: form.units,
      }
    });
    console.log(response.data);
    setWeather(response.data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  fetchData();
}, []);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const values = Object.fromEntries(formData.entries());

  // Validar y asegurar el tipo de los datos antes de usarlos
  const updatedForm: FormState = {
    city: values.city as string,
    units: values.units as 'metric' | 'imperial', // Solo puede ser 'metric' o 'imperial'
  };

  setForm(updatedForm);
  fetchData();
};


  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#cdc4f9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className='col-md-12 col-xl-10'>
            <h3 className="mb-4 pb-2 fw-normal text-dark text-center">Weather App</h3>
              {weather ? 
                (<Card
                  city={weather.name}
                  description={weather.weather[0].description}
                  temp={weather.main.temp}
                  feels={weather.main.feels_like}
                  min={weather.main.temp_min}
                  max={weather.main.temp_max}
                  wind={weather.wind.gust}
                  main={weather.weather[0].main}
                  humidity={weather.main.humidity}
                  pressure={weather.main.pressure}
                  sea={weather.main.sea_level}
                  country={weather.sys.country}
                  icon={weather.weather[0].icon}
                />) 
                :
              <Search 
                handleSubmit={handleSubmit}
              />  
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
