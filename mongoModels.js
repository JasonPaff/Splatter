const mongoose = require("mongoose");
const {mongoTicketSchema} = require("./mongooseSchemas");

const Ticket = mongoose.model('Ticket', mongoTicketSchema);

module.exports.Ticket = Ticket;