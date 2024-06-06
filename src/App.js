<<<<<<< HEAD

import './App.css';

import { BrowserRouter, Routes } from 'react-router-dom'
import renderRoutes from './routes';
import { Suspense } from 'react';
import FileLoading from './components/Loading';


function App() {
  return (
    <Suspense fallback={<FileLoading />}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
=======
import { useSelector } from 'react-redux';
import './App.css';
import WeatherSearch from './components/WeatherSearch';

function App() {

  return (
    <div>
      <WeatherSearch />
    </div>
>>>>>>> 57e407c0a856136c5ff4cdffd32795582e3893fd
  );
}

export default App;
