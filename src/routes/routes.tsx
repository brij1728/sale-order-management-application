import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, SignUpPage } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
