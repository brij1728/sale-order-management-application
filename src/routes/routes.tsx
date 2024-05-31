import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ForgotPasswordPage, LoginPage, NotFound, SignUpPage } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='*' element={<NotFound />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};
