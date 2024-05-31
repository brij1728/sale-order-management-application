import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  NotFound,
  SignUpPage,
} from '../pages';

import { PrivateRoute } from './PrivateRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
