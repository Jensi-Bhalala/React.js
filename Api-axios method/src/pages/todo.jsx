const { useEffect } = require("react");

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const getRecord = async () => {
    try {
      let { data } = await axios.get(`https://dummyjson.com/todos`);
      setTodos(data.products);
    }
    catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    getRecord();
  }, []);
  return (
    <div>
      <h1>Api calling Axios method</h1>
      <div className="container">
        {
          todos.map((val) => {
            const { id, title, description, category, rating, price } = val;
            return (
              <div className="todo">
                <div key={id}>
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <span>Category: {category}</span>
                  <div className='price'>
                    <p>Rating: {rating}</p>
                    <p>Price: {price}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}