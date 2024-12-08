interface CardProps {
    city: string; // Nombre de la ciudad
    description: string; // Descripción del clima (por ejemplo, "Clear sky")
    temp: number; // Temperatura actual en grados Celsius
    feels: number; // Sensación térmica en grados Celsius
    max: number; // Temperatura máxima en grados Celsius
    min: number; // Temperatura mínima en grados Celsius
    humidity: number; // Humedad en porcentaje
    pressure: number; // Presión atmosférica en hPa
    sea: number; // Nivel del mar en metros
    country: string; // Código del país (ISO 3166-1 alfa-2)
    main: string; // Condición climática principal (por ejemplo, "Clouds")
    wind: number; // Velocidad del viento en m/s
    icon: string; // Código del ícono climático proporcionado por la API
  }
  
const Card = ({ city, description, temp, feels, max, min, humidity, pressure, sea, country, main, wind, icon } : CardProps) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  return (
      <div className="card shadow-0 border border-dark border-5 text-light bg-dark" style={{ borderRadius: 10 }}>
          <div className="card-body p-4">
              <div className="row text-center">
                  <div
                      className="col-md-9 text-center border-end border-5 border-dark py-4"
                      style={{ marginTop: '-1.5rem', marginBottom: '-1.5rem' }}
                  >
                      <div className="d-flex justify-content-around mt-3">
                          <p className="small">City: <strong>{city}</strong></p>
                          <p className="small">Country: <strong>{country}</strong></p>
                          <p className="small">Weather: <strong>{main}</strong></p>
                      </div>

                      <div className="d-flex justify-content-around align-items-center py-5 my-4">
                          <div className="text-start">
                              <p className="small">Feels like: {feels.toFixed(0)}°C</p>
                              <p className="h3 mb-3">{description}</p>
                              <p className="small mb-0">
                                  <img className="img-fluid hover-shadow rounded-circle" src={iconUrl} alt={description} />
                              </p>
                          </div>
                          <p className="fw-bold mb-0" style={{ fontSize: '5rem' }}>{temp.toFixed(0)}°C</p>
                      </div>

                      <div className="d-flex justify-content-around align-items-center mb-3">
                          <div className="flex-column">
                              <p className="small mb-1">Max:</p>
                              <p className="small mb-0"><strong>{max.toFixed(0)}°C</strong></p>
                          </div>
                          <div className="flex-column">
                              <p className="small mb-1">Min:</p>
                              <p className="small mb-0"><strong>{min.toFixed(0)}°C</strong></p>
                          </div>
                      </div>
                  </div>

                  <div className="col-9 col-md-3 text-end mt-3">
                      <p className="small mt-3 mb-5 pb-5">Humidity: {humidity}%</p>
                      <p className="small mb-5 pb-5">Pressure: {pressure} hPa</p>
                      <p className="small mb-5 pb-5">Sea Level: {sea} m</p>
                      <p className="small mb-5 pb-5">Wind: {wind} m/s</p>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Card;
