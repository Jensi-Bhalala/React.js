import Users from "./Info"
import "./App.css"
function App() {
  let data = [
    {
      grid: 1,
      name: 'kishan',
      email: 'kishan@gmail.com',
      password: 'kishan@5678',
      course: ["html", "css"],
      city: "surat"
    },
    {
      grid: 2,
      name: 'vijay',
      email: 'vijay@gmail.com',
      password: 'vijay@12323',
      course: ["photoshop", "illustrator"],
      city: "rajkot"
    },
    {
      grid: 3,
      name: 'ajay',
      email: 'ajay@gmail.com',
      password: 'ajay@1233',
      course: ["css", "bootstrap"],
      city: "amreli"
    },
    {
      grid: 4,
      name: 'jay',
      email: 'jay@gmail.com',
      password: 'jay@122',
      course: ["html", "css", "bootstrap"],
      city: "ahemdabad"
    }

  ]


  return (
    <div>
      <Users
        info={data}

      />
    </div>
  )
}

export default App