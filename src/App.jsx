import axios from "axios";
import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import WeatherInfo from "./components/WeatherInfo.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=a3000e419c7a76c8d7704965949fdfe8`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
     <SearchBar location={location} setLocation={setLocation} searchLocation={searchLocation}/>

      <div className="container">
        <WeatherInfo data={data}/>
        {data.name && <WeatherDetails data={data}/>}
     </div>
    </div>
  );
}

export default App;

