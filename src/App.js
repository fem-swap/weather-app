import Weather from "./components/Weather";
import "./styles.css";

const API_KEY = "5fed00aeda7ead330f91250c9da9bbe9";

export default function App() {
  return (
    <div className="backdrop">
      <div className="main">
        <Weather
          data={{
            city_name: "Pune",
            weather_status: "Clouds",
            weather_desc: "Rainy",
            temp: "43.2"
          }}
        />
      </div>
    </div>
  );
}
