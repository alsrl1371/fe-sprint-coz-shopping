import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import ToastMessage from './components/ToastMessage';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastMessage />
    </>
  );
}

export default App;
