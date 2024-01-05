import Auth from "./pages/Auth/index";
import Chat from "./pages/Chat";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </>
  );
};

export default App;
