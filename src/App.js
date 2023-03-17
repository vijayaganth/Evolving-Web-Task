import "./Style/reset.css";
import "./App.scss";
import Header from "./Components/Header";
import MealList from "./Components/MealList";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <MealList />
      <Cart />
    </div>
  );
}

export default App;
