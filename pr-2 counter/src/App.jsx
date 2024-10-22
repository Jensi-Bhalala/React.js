import { useEffect,useState } from "react"

function App() {
  const [no, setNo] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setNo(no + 1);
    }, 1000)
  })
  return (
   <div>
    <h3>{no}</h3>
   </div>
  )
}
export default App
