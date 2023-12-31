import { useEffect, useState } from "react"

export function Child() {
  const [age, setAge] = useState(0)
  const [name, setName] = useState("")

  useEffect(() => {
    console.log("Child component **Hi**")
  },[]);
  useEffect(() => {
    console.log("Child component **Render**")
  },);
  useEffect(() => {
    console.log(`**My name is ${name} and I am ${age} years old**`)
  },[name,age]);
  useEffect(() => {
    if (name!==""){
      document.title = `My name is ${name}`
    }
  },[name]);
  document.title = "Pacholo"
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setAge(a => a - 1)}>-</button>
      {age}
      <button onClick={() => setAge(a => a + 1)}>+</button>
      <br />
      <br />
      My name is {name} and I am {age} years old.
    </div>
  )
}
