import logo from './logo.svg';
import './App.css';
import TopBar from "./components/TopBar";
import ChatRoom from "./components/ChatRoom";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/chatroom" element={<ChatRoom />} />
        </Routes>


      <button type="button" className={"btn btn-danger"}>Submit</button>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
