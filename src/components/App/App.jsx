import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../redux/auth/operations';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
import Layout from '../Layout/Layout';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import Loader from '../Loader/Loader';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <Loader isLoading={true} />} 
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
            />
            <Route path="*" element={<PrivateRoute redirectTo="/login" component={<HomePage />} />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
