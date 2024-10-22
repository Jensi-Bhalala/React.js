import Users from "./data"
import "./App.css"
function App() {
  let data = [
    {
      grid: 1,
      name: 'krushi',
      email: 'krushi@gmail.com',
      password: 'krushi@5678',
      course: ["html", "css"],
      city: "surat"
    },
    {
      grid: 2,
      name: 'mahil',
      email: 'mahil@gmail.com',
      password: 'mahil@12323',
      course: ["photoshop", "illustrator"],
      city: "rajkot"
    },
    {
      grid: 3,
      name: 'het',
      email: 'het@gmail.com',
      password: 'het@1233',
      course: ["css", "bootstrap"],
      city: "amreli"
    },
    {
      grid: 4,
      name: 'adity',
      email: 'adity@gmail.com',
      password: 'adity@122',
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