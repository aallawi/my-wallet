import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import ListItem from "./components/Item/ListItem";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Input />
        <ListItem />
      </div>
      <Footer />
    </div>
  );
}

export default App;
