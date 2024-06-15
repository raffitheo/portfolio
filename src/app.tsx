import Footer from '@components/footer';
import i18n from '@localizations';
import { lazy } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Home = lazy(() => import('@pages/home'));

const App = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <html lang={i18n.language} dir={i18n.dir()} />
                <title>{t('SEO.Title')}</title>
                <meta name="title" content={t('SEO.Title')} />
                <meta name="description" content={t('SEO.Description')} />
                <meta name="keywords" content={t('SEO.Keywords')} />
                <meta property="og:title" content={t('SEO.Title')} />
                <meta
                    property="og:description"
                    content={t('SEO.Description')}
                />
                <meta http-equiv="Content-Language" content={i18n.language} />
                <meta property="twitter:title" content={t('SEO.Title')} />
                <meta
                    property="twitter:description"
                    content={t('SEO.Description')}
                />
            </Helmet>

            <Router>
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>

                <Footer />
            </Router>
        </>
    );
};

export default App;
