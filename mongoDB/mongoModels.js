const mongoose = require("mongoose");
const {mongoMessageSchema, mongoTicketSchema} = require("./mongooseSchemas");

const Ticket = mongoose.model('Ticket', mongoTicketSchema);
const Message = mongoose.model('Message', mongoMessageSchema);

module.exports.Ticket = Ticket;
module.exports.Message = Message;