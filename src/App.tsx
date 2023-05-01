import React, { useMemo, useCallback } from "react"
import "./App.less"

import strings from "./loc/mystrings"
import SlideButton from "@components/SlideButton/SlideButton"

const App: React.FC = () => {
  const onMouseEnterWord = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      event.stopPropagation()
      ;(event.target as HTMLElement).classList.toggle("darken")
    },
    []
  )

  const descriptionWords = useMemo(() => {
    return (
      <p className="description-wrapper">
        {strings
          .formatString(strings.landing.description)
          .toString()
          .split(" ")
          .map((word, index) => {
            return (
              <span key={index}>
                <span
                  className="description-element"
                  data-replace={word}
                  title={word}
                  onMouseEnter={onMouseEnterWord}
                >
                  <span>{word}</span>
                </span>

                <span style={{ pointerEvents: "none" }}>
                  {index !==
                  strings
                    .formatString(strings.landing.description)
                    .toString()
                    .split(" ").length -
                    1
                    ? " "
                    : ""}
                </span>
              </span>
            )
          })}
      </p>
    )
  }, [strings.formatString(strings.landing.description)])

  return (
    <>
      <section className="home">
        <div className="container">
          <div className="row">
            <h1 className="title">
              {strings.formatString(strings.landing.title)}
            </h1>
            {descriptionWords}
          </div>
        </div>
      </section>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          left: "0",
          position: "absolute",
          top: "50%",
          transform: "translate3d(0, -50%, 0)"
        }}
      >
        <SlideButton
          backgroundColor="#006fbc"
          href="https://www.linkedin.com/in/raffaele-valenti/"
          icon="Linkedin"
          newTab
          text={strings
            .formatString(strings.landing.social.linkedin)
            .toString()}
          textColor="#ffffff"
        />
        <SlideButton
          backgroundColor="#343334"
          href="https://github.com/raffitheo"
          icon="GitHub"
          newTab
          text={strings.formatString(strings.landing.social.github).toString()}
          textColor="#ffffff"
        />
        <SlideButton
          backgroundColor="#69b8b0"
          href="mailto: raffaele-valenti@tutamail.com"
          icon="Mail"
          text={strings.formatString(strings.landing.social.email).toString()}
          textColor="#ffffff"
        />
        <SlideButton
          backgroundColor="#525a67"
          href={`${window.location.href}files/Curriculum (${strings
            .getLanguage()
            .toUpperCase()}).pdf`}
          icon="FileText"
          newTab
          text={strings.formatString(strings.landing.social.resume).toString()}
          textColor="#ffffff"
        />
      </div>
    </>
  )
}

export default App
