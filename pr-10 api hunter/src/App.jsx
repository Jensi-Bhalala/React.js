import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let Response = await fetch(`https://dummyjson.com/products`);
      let data = await Response.json();
      setProducts(data.products);
      console.log(data.products);
    }
    catch (err) {
      console.log(err);
      return false;
    }
  }
  useEffect(() => {
    getProducts();
  }, [])
  return (
    <>
      <div align="center">
        <h2>Api calling using fatch method</h2>
        <table border={1} className="table">
          <thead>
            <tr>
              <th style={{textAlign:"center"}}>Sr.no</th>
              <th style={{textAlign:"center"}}>Title</th>
              <th style={{textAlign:"center"}}>Description</th>
              <th style={{textAlign:"center"}}>Category</th>
              <th style={{textAlign:"center"}}>DiscountPercentage</th>
              <th style={{textAlign:"center"}}>Rating</th>
              <th style={{textAlign:"center"}}>Stock</th>
              <th style={{textAlign:"center"}}>Tags</th>
              <th style={{textAlign:"center"}}>Brand</th>
              <th style={{textAlign:"center"}}>availabilityStatus</th>
              <th style={{textAlign:"center"}}>Reviews</th>
            </tr>
          </thead>
          <tbody id="record">
            {
              products.map((val, i) => {
                return (
                  <tr key={i}>
                    <td align="center">{++i}</td>
                    <td align="center">{val.title}</td>
                    <td align="center">{val.description}</td>
                    <td align="center">{val.category}</td>
                    <td align="center">{val.discountPercentage}</td>
                    <td align="center">{val.rating}</td>
                    <td align="center">{val.stock}</td>
                    <td align="center">{val.tags.join(", ")}</td>
                    <td align="center">{val.brand}</td>
                    <td align="center">{val.availabilityStatus}</td>
                    <td align="center">
                      {val.reviews && val.reviews.length > 0 ? (
                        <table>
                          <thead>
                            <tr>
                              <th style={{textAlign:"center"}}>Rating</th>
                              <th style={{textAlign:"center"}}>Comment</th>
                              <th style={{textAlign:"center"}}>Date</th>
                              <th style={{textAlign:"center"}}>Reviewer <br />Name</th>
                            </tr>
                          </thead>
                          <tbody>
                            {val.reviews.map((review, index) => (
                              <tr key={index}>
                                <td align="center">{review.rating}</td>
                                <td align="center">{review.comment}</td>
                                <td align="center">{review.date}</td>
                                <td align="center">{review.reviewerName}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ): ( "No Reviews Available"
                      )}
                    </td>
                    <td><img src={val.images} style={{width:"200px"}}/></td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
