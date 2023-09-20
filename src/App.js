import Header from './components/Header';
import Home from './components/Home';
import BookAppointment from './components/BookAppointment';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <Home />} />
        <Route path="/search" element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
