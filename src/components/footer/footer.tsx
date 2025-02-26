import { useTranslation } from 'react-i18next';
import './footer.sass';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-element">
                    <span className="title">{t('Footer.CopyRightNotice')}</span>
                </div>
                <div className="footer-element">
                    <span className="title">E-mail</span>
                    <span className="description">
                        raffaele-valenti@protonmail.com
                    </span>
                </div>
                <div className="footer-element">
                    <span className="title">Tel.</span>
                    <span className="description">+39 348 469 1962</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
