
import './App.css';
import Home from './components/Home';

const product = {
  name: "Realme 14X 5G",
  price: 12499,
  originalPrice: 14999,
  discount: 17,
  rating: 4.3,
  description: "5G Phone with 120Hz display, 64MP AI Camera, and 5000mAh battery."
};

const imgLink = "https://m.media-amazon.com/images/I/71KSbXmTdcL._SX679_.jpg";

function App() {
  return (
    <div className="app-container">
      <Home imgLink={imgLink} obj={product} />
    </div>
  );
}

export default App;
