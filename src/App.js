import "./App.css";
import Header from "./Navbar/Header";
import Main from "./components/Main/Main";
// import { DesignProvide, DesignCTX } from "./context/DesignCTX";
// import { useContext } from "react";

function App() {
  // const input = useContext(DesignCTX);
  // console.log(input);
  return (
    // <DesignProvide>
    <div className="App">
      <Header />
      <Main />
    </div>
    // </DesignProvide>
  );
}

export default App;
