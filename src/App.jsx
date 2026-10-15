import { useState, useEffect } from "react";
import "./App.css";


function App() {
  const [page, setPage] = useState("about");

  return (
    <div className="app">
      <header>
        <h1>My Weather App</h1>

        <nav>
          <button onClick={() => setPage("about")}>
            About Me
          </button>

          <button onClick={() => setPage("town")}>
            My Town
          </button>
        </nav>
      </header>

      <main>
        {page === "about" ? <AboutMe /> : <MyTown />}
      </main>
    </div>
  );
}


// About Me page

function AboutMe() {
  return (
    <div className="card">
      <h2>About Me</h2>

      <p>Hello! My name is Sam.</p>

      <p>
        I am a graduate student studying Computing
        and Data Analytics at Saint Mary's University.
      </p>

      <p>
        I enjoy programming, data science,
        and learning new technologies.
      </p>
    </div>
  );
}


// My Town page


function MyTown() {
  // State variables
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  // Fetch weather data from API
  useEffect(() => {
    async function fetchWeather() {
      try {
        const url =
          "https://api.open-meteo.com/v1/forecast" +
          "?latitude=44.65&longitude=-63.57" +
          "&current=temperature_2m";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch weather");
        }

        const data = await response.json();

        setTemperature(data.current.temperature_2m);
      } catch (err) {
        setError("Could not load weather data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, []);

  // Select weather image based on temperature
  function getWeatherImage(temp) {
    if (temp <= 10) {
      return "/cold.png";
    } else if (temp < 20) {
      return "/mild.png";
    } else {
      return "/sunny.png";
    }
  }

  // Temperature conversion based on user preference
  const displayedTemperature = isFahrenheit
  ? (temperature * 9) / 5 + 32
  : temperature;

  // Display the My Town page
  
return (
  <div className="card">
    <h2>My Town: Halifax</h2>

    <p>
      Halifax is the capital of Nova Scotia,
      located on Canada's Atlantic coast.
    </p>

    <h3>Current Weather</h3>

    {loading && <p>Loading weather...</p>}

    {error && <p className="error">{error}</p>}

    {temperature !== null && (
      <div className="weather">
        <img
          src={getWeatherImage(temperature)}
          alt="Current weather"
        />

        <p className="temperature">
          {displayedTemperature.toFixed(1)}
          °{isFahrenheit ? "F" : "C"}
        </p>

        <button
          onClick={() => setIsFahrenheit(!isFahrenheit)}
        >
          Change to °{isFahrenheit ? "C" : "F"}
        </button>
      </div>
    )}
  </div>
);

}

export default App;
