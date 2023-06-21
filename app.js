const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const invoiceRoutes = require("./routes/invoiceRoutes")

// middleware for accepting form data from post requests
app.use(express.urlencoded({ extended: true }));

const dbUri =
  "mongodb+srv://invoiceadmin:test1234@invoicecluster.66u6pnw.mongodb.net/invoice-data?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("success number 1");
  })
  .catch((error) => {
    console.log("something went wrong");
    console.log(error);
  });

app.listen("3000");

//register ejs ==> a template engine translating html to readable and writeable data for express
app.set("view engine", "ejs"); // automatically looks in the views folder

// invoice routes are all the methods established for invoice
app.use('/invoices',invoiceRoutes)

app.use((req, res, next) => {
  console.log("a new middleware");
  // to override the stopping of other functions, we use the next() function
  next();
  //essentially means I am done with this block of code/ function move on to the next
});
