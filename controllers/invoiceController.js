const express = require("express");
const Invoice = require("../models/invoice");

const newInvoiceItem = {
  status: "Complete",
  invoiceCode: "#XM2345",
  invoiceName: "AI Design",
  billerName: "Porsha Grim",
  billerEmail: "alexgrim@gmail.com",
  billerAddress: "84 Church Way Bradford BD1 9PB United Kingdom",
  billedDate: "19 Aug, 2021",
  dueDate: "19 Aug, 2021",
  totalAmountCurrency: "£",
  totalAmount: 556.0,
  items: [
    {
      itemName: "Banner Design",
      qty: 1,
      unitPrice: 156,
      itemCurrency: "£",
      totalItemPrice: 156,
    },
    {
      itemName: "Email Design",
      qty: 2,
      unitPrice: 200.0,
      itemCurrency: "£",
      totalItemPrice: 200,
    },
  ],
};

const invoice_index = (req, res) => {
  Invoice.find()
    .then((result) => {
      // res.send(result);
      res.status(200);
      res.json(result);
      console.log("get all success");
    })
    .catch((error) => {
      console.log("get all error", error);
    });
};

const invoice_create_get = (req, res) => {
  const latestInvoice = new Invoice(newInvoiceItem);
  latestInvoice
    .save()
    .then((result) => {
      // res.send(result);
      res.status(200);
      res.json(result);
      console.log("another success");
    })
    .catch((err) => {
      console.log("seems something went wrong", err);
    });
};

const invoice_create_post = (req, res) => {
  const sentInvoice = new Invoice(req.body);
  sentInvoice
    .save()
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(result);
    })
    .catch((error) => console.log(error));
};

const invoice_details = (req, res) => {
  const id = req.params.id;
  Invoice.findById(id)
    .then((result) => {
      // res.send(result);
      res.status(200);
      res.json(result);
      console.log("successful");
    })
    .catch((err) => {
      console.log("single error", err);
      // res.status(404).render('/views/404')
    });
};

const invoice_delete = (req, res) => {
  const id = req.params.id;
  Invoice.findByIdAndDelete(id)
    .then((result) => {
      // res.send(result);
      res.status(200);
      res.json(result);
      console.log("delete successful");
    })
    .catch((err) => console.log("delete", err));
};

const invoice_update = (req, res) => {
  const id = req.params.id;
  Invoice.findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200);
      res.json(result);
      console.log("update successful");
    })
    .catch((err) => console.log("update error", err));
};

module.exports = {
  invoice_index,
  invoice_create_get,
  invoice_create_post,
  invoice_details,
  invoice_delete,
  invoice_update,
};
