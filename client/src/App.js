import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Chat from "./view/Chat/Chat";
import Join from "./view/Join/Join";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Join />} />
        <Route path="chat" element={<Chat />} />
    </Routes>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
