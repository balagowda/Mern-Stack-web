import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/Home/Main";
import UnderNav from "./Components/Undernav/UnderNav";

function App() {
  return (
    <>
      <NavBar />
      <UnderNav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
