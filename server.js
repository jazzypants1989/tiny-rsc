import express from "express"
import React from "react"
import { renderToPipeableStream } from "react-server-dom-webpack/server.node"
import App from "./App.js"

const app = express()
const port = 8080

app.use(express.static("static"))

app.get("*", async function (req, res) {
  const root = React.createElement(App)
  const { pipe } = renderToPipeableStream(root)
  pipe(res)
})

app.listen(
  port,
  console.log(`Example app listening at http://localhost:${port}`)
)
