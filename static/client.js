import { use, createElement } from "https://esm.sh/react@experimental"
import { createRoot } from "https://esm.sh/react-dom@experimental"
import { createFromFetch } from "https://esm.sh/react-server-dom-webpack@experimental/client"

const button = document.createElement("button")
button.textContent = "Refresh"

button.addEventListener("click", () => {
  let thenable = createFromFetch(fetch("/somethingElse"))

  function Shell({ thenable }) {
    const resolvedPromise = use(thenable)
    return resolvedPromise
  }

  const app = document.querySelector("#app")
  const RootElement = createElement(Shell, { thenable })
  createRoot(app).render(RootElement)
})

document.body.appendChild(button)
