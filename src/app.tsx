import Footer from '@components/footer';
import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Home = lazy(() => import('@pages/home'));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<Home />} path="/" />
            </Routes>

            <Footer />
        </Router>
    );
};

export default App;
