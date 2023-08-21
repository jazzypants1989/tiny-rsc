import React from "react"

const secrets = ["bigSecret", "donkeys", "anotherSecret", "dude"]

const One = React.createElement("h1", { key: "1" }, [
  `hey! what is up, my ${secrets.at(-1)}?`,
])

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const asyncFunction = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")

  console.log(secrets[0])

  return data.json()
}

const Suspended = async () => {
  await timeout(2000)
  const json = await asyncFunction()
  return json.title
}

const SusComponent = React.createElement(Suspended, { key: 3 })

const Two = React.createElement(
  React.Suspense,
  { fallback: "I'm loading! Hold your " + secrets[1] + "!", key: 2 },
  SusComponent
)

export default function App() {
  return React.createElement("div", null, [One, Two])
}
