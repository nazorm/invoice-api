const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");


// add new invoice
router.get("/create", invoiceController.invoice_create_get);

// add a new invoice to the db using the post method and accepting data from the browser
router.post("/create", invoiceController.invoice_create_post);

// get all invoices
router.get("/", invoiceController.invoice_index);

// find single invoice by id

router.get("/single", invoiceController.invoice_details);

// delete invoice
router.delete("/delete", invoiceController.invoice_delete);

module.exports = router;
