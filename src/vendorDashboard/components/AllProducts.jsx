import React, { useEffect, useState } from 'react'
import { API_URL } from '../data/apiPath';

const AllProducts = () => {
  const [products, setProducts] = useState([])
  const productHandler = async () => {
    const firmId = localStorage.getItem('firmId');
    try {
      const response = await fetch(`${API_URL}/product/${firmId}`);
      const newProductData = await response.json()
      setProducts(newProductData.products)
      // console.log(products)
    } catch (error) {
      console.log("failed To Fetch Products")
      alert("Failed To Fetch products")

    }
  }
  useEffect(() => {
    productHandler()
  }, [])


  return (
    <div>
      {products.length === 0 ? (
        <p>No Products</p>
      ) : (
        <table className='products-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <>
                  <tr key={item._id}>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>
                      {item.image && (
                        <img className='h-[30px]' src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
                      )}
                    </td>
                    <td>
                      <button>Delete</button>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      )}

    </div>
  )
}

export default AllProducts