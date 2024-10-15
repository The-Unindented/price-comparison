// // db.js
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const uri = "mongodb+srv://aradhana8704:tbXrdyKlh8xEo1w3@pricecomparison.v81mo.mongodb.net/?retryWrites=true&w=majority&appName=PriceComparison";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");
//     return client.db("PriceComparison"); // Change to your database name
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// module.exports = { connectToDatabase };

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://aradhana8704:tbXrdyKlh8xEo1w3@pricecomparison.v81mo.mongodb.net/?retryWrites=true&w=majority&ssl=false";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tlsAllowInvalidCertificates: true // Bypass certificate validation
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
