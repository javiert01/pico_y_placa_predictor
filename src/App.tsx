import "./App.css";
import PicoyPlacaForm from "./components/PicoyPlacaForm/PicoyPlacaForm";

function App() {
  return (
    <div className="main">
      <h1>Pico y Placa Predictor</h1>
      <p>This webpage let's you know if your car can be on the road based on Quito's Pico y Placa rules.</p>
      <p>Enter your license plate, a day and a time and click on the "View Result!" button.</p>
      <PicoyPlacaForm />
    </div>
  );
}

export default App;
