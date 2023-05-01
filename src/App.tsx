import React, { useMemo, useCallback } from "react"
import "./App.less"

import strings from "./loc/mystrings"

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
  )
}

export default App
