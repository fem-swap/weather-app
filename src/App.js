import Weather from "./components/Weather";
import "./styles.css";

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
