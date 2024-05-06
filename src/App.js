
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
  );
}

export default App;
