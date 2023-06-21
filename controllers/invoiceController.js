const express = require('express');
const Invoice = require('../models/invoice');


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
        res.send(result);
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
      .then((response) => {
        // res.send(response);
        res.json(result);
      })
      .then((error) => console.log(error));
  };


const invoice_details = (req, res) => {
    Invoice.findById("64862f0657f1eee165750d9f")
      .then((result) => {
        // res.send(result);
        res.json(result);
        console.log("successful");
      })
      .catch((err) => {
        console.log("single error", err)
        res.status(404).render('/404')
      });
  };

const invoice_delete = (req, res) => {
    Invoice.findByIdAndDelete("648a03d06909df97489238b0")
      .then((result) => {
        // res.send(result);
        res.json(result);
        console.log("delete successful");
      })
      .catch((err) => console.log("delete", err));
  };


  module.exports = {
    invoice_index,
    invoice_create_get,
    invoice_create_post,
    invoice_details,
    invoice_delete
  }