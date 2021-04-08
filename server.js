const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




//This post request connects the front end product display to the backend mongodb database
//The query will check to see how much product exists in the database by productid
app.post("/api/getinventory", (req, res) => {
  var MongoClient = require("mongodb").MongoClient;
  //Using MongoDB Atlas to host the database
  //Data is stored in the "Product" Database
  //The collection we are accessing is the "productdata" collection
  const uri = "mongodb+srv://jason123:jason123@cluster0.6jxjw.mongodb.net/Products?retryWrites=true&w=majority"

  
  const client = new MongoClient(uri);
  async function run() {
	  try {
		await client.connect();
		var pname = req.body;
    console.log(pname)
    //Connect to the "Products" database
		const database = client.db('Products');
    //Connect to the "productdata" collection
		const products = database.collection('productdata');
    
    //Query based on productname which is derived from the post request on the front end
		const query = { productname: pname.name };
		const product = await products.findOne(query);
    console.log(product)
    console.log(product._id)
		console.log(product.inventory);
    res.send({ express: product.inventory });
	  } finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	  }

	}
  run().catch(console.dir);
  
});


//This post request connects the front end product display to the backend mongodb database
//The query will check to see how much product exists in the database by productid
app.post("/api/decinv", (req, res) => {
  var MongoClient = require("mongodb").MongoClient;
  //Using MongoDB Atlas to host the database
  //Data is stored in the "Product" Database
  //The collection we are accessing is the "productdata" collection
  const uri = "mongodb+srv://jason123:jason123@cluster0.6jxjw.mongodb.net/Products?retryWrites=true&w=majority"

  const client = new MongoClient(uri);
  async function run() {
	  try {
		await client.connect();
		var pname = req.body;
    console.log(pname)
    //Connect to the "Products" database
		const database = client.db('Products');
    //Connect to the "productdata" collection
		const products = database.collection('productdata');

    const filter = {productname: pname.name}
    const updateDoc = {
			$inc: {
			  inventory: -1
			},
		  };
      const result = await products.updateOne(filter, updateDoc);
      console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
	  } finally {
		// Ensures that the client will close when you finish/error
		await client.close();
	  }

	}
  run().catch(console.dir);
  
});


app.get("/api/hello", (req, res) => {
  console.log(req.body);
  res.send({ express: 10 });
});


app.post("/api/chatlog", (req, res) => {
  console.log(req.body);
  res.send({ express: 100});
});
app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});
app.listen(port, () => console.log(`Listening on port ${port}`));
