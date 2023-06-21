const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//new instance of a schema object, the format/structure for our document type we want to store in our invoice collection
const invoiceSchema = new Schema(
  {
    status: {
      type: String,
      required: true,
    },
    invoiceCode: {
      type: String,
      required: true,
    },
    invoiceName: {
      type: String,
      required: true,
    },
    billerName: {
      type: String,
      required: true,
    },
    billerEmail: {
      type: String,
      required: true,
    },
    billerAddress: {
      type: String,
      required: true,
    },
    billedDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    totalAmountCurrency: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    items: [
      {
        itemName: String,
        qty: Number,
        unitPrice: Number,
        itemCurrency: String,
        totalItemPrice: Number,
      },
      {
        itemName: String,
        qty: Number,
        unitPrice: Number,
        itemCurrency: String,
        totalItemPrice: Number,
      },
    ],
  },
  { timestamps: true }
);

// a model for the for our collection, it wraps around our schema, and it is with this model we make changes and uodates to our collection data.
// model comes with static and instance methods like get, delete, save and so on
const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
