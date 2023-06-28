import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabecalho from './layout/Cabecalho'
import Home from './pages/Home'
import Meditar from './pages/Meditar'
import Organizar from './pages/Organizar'
import Ajuda from './pages/Ajuda'
import NoPage from './pages/NoPage'
import Status from './pages/Status';
import { EmojiContextProvider } from './context/AppContext';

export default function App() {
  return (
    <EmojiContextProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cabecalho />}>
          <Route index element={<Home />} />
          <Route path="sentimentos" element={<Status />} />
          <Route path="meditar" element={<Meditar />} />
          <Route path="organizar" element={<Organizar />} />
          <Route path="ajuda" element={<Ajuda />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </EmojiContextProvider>
  )
}
