const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");
const bodyParser = require("body-parser");

// create application/json parser
const jsonParser = bodyParser.json();

// add new invoice
router.get("/create", invoiceController.invoice_create_get);

// add a new invoice to the db using the post method and accepting data from the browser
router.post("/create", jsonParser, invoiceController.invoice_create_post);

// get all invoices
router.get("/", invoiceController.invoice_index);

// find single invoice by id
router.get("/single/:id", invoiceController.invoice_details);

//update invoice
router.patch("/update/:id", jsonParser,  invoiceController.invoice_update);

// delete invoice
router.delete("/delete/:id", invoiceController.invoice_delete);

module.exports = router;
