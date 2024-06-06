import SlideButton from '@components/slide-button';
import i18n from '@localizations';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import './home.sass';

const Home = () => {
    const { t } = useTranslation();

    const description = t('Landing.Description');

    const onMouseEnterWord = useCallback(
        (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            event.stopPropagation();
            (event.target as HTMLElement).classList.toggle('darken');
        },
        [],
    );

    const descriptionWords = useMemo(() => {
        return (
            <p className="description-wrapper">
                {description.split(' ').map((word, index) => {
                    return (
                        <span key={`${word}_${index}`}>
                            <span
                                className="description-element"
                                data-replace={word}
                                title={word}
                                onMouseEnter={onMouseEnterWord}
                            >
                                <span>{word}</span>
                            </span>

                            <span className="space">
                                {index !== description.split(' ').length - 1
                                    ? ' '
                                    : ''}
                            </span>
                        </span>
                    );
                })}
            </p>
        );
    }, [description]);

    return (
        <>
            <section className="home">
                <div className="container">
                    <div className="row">
                        <h1 className="title">{t('Landing.Title')}</h1>
                        {descriptionWords}
                    </div>
                </div>
            </section>

            <div className="social-wrapper">
                <SlideButton
                    backgroundColor="#006fbc"
                    href="https://www.linkedin.com/in/raffaele-valenti/"
                    icon="Linkedin"
                    newTab
                    text={t('Landing.Social.LinkedIn')}
                    textColor="#ffffff"
                />
                <SlideButton
                    backgroundColor="#343334"
                    href="https://github.com/raffitheo"
                    icon="GitHub"
                    newTab
                    text={t('Landing.Social.GitHub')}
                    textColor="#ffffff"
                />
                <SlideButton
                    backgroundColor="#69b8b0"
                    href="mailto: raffaele-valenti@protonmail.com"
                    icon="Mail"
                    text={t('Landing.Social.Email')}
                    textColor="#ffffff"
                />
                <SlideButton
                    backgroundColor="#525a67"
                    href={`${window.location.href}files/Curriculum (${i18n.language.toString().toUpperCase()}).pdf`}
                    icon="FileText"
                    newTab
                    text={t('Landing.Social.Resume')}
                    textColor="#ffffff"
                />
            </div>
        </>
    );
};

export default Home;
