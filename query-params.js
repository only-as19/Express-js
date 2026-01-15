const express = require("express");
const app = express();
const { products } = require("./data");

// Some time when we are trying to access any prduct list all the product have minimal information
// but when we click on specific product then we get the complete information of the product
// To complete this task
app.get("/", (req, res) => {
    const newProducts = products.map(product=>{
        const {id,name,image} = product;
        return {id,name,image};
    })

    res.json(newProducts)
});

// Params
// to handle params:

app.get("/api/products/:productID", (req, res) => {
    // First approach
    // const singleProduct = products.find(product => product.id === Number(1))

   // Best approach: using params
const {productID} = req.params
const singleProduct = products.find(product => product.id === Number(productID))
if(!singleProduct){
  res.status(400).send('Product does not exist')
}
return res.json(singleProduct)

});

// Query string 
app.get("/api/v1/query", (req, res) => {

  const {search, limit} = req.query; 
  let sortedProducts = [...products];

  // search with specific letter using query
  // Example /api/v1/query?query= list all the products whose name starts with a
  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }

  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }

// if you don't find the product
if(sortedProducts.length<1){
  
  // res.status(200).send('Cannot find any project')
  
  // another way to handle this
  res.status(200).json([{success: "true",data:[]}])
}




res.status(200).json(sortedProducts)
});

app.listen(5000, () => {
  console.log("The server is listening to the port 5000");
});