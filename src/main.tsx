import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.less"

import "./assets/fonts/Front Page News.otf"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </React.StrictMode>
)
