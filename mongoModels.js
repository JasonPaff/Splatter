const mongoose = require("mongoose");
const {mongoTicketSchema, mongoImageSchema} = require("./mongooseSchemas");

const Ticket = mongoose.model('Ticket', mongoTicketSchema);

module.exports.Ticket = Ticket;