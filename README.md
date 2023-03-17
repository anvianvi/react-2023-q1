data from  - https://fakestoreapi.com/

fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

GET
/products
GET
/products/1
GET
/products/categories
GET
/products/category/jewelery
GET
/cart?userId=1
GET
/products?limit=5
POST
/products
PUT
/products/1
PATCH
/products/1
DELETE
/products/1