const mongoose = require("mongoose");

const mongoTicketSchema = new mongoose.Schema({
    title: String,
    severity: String,
    priority: Number,
    type: String,
    product: String,
    browser: String,
    screenshot: String,
    summary: String,
    reproductionSteps: String,
    expectedResult: String,
    actualResult: String,
    createdAt: { type: Date, default: Date.now },
    createdBy: String,
    updatedAt: { type: Date, default: Date.now },
    updatedBy: String,
    assignedTo: String,
    status: String
});

module.exports.mongoTicketSchema = mongoTicketSchema;