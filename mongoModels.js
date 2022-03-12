const mongoose = require("mongoose");
const {mongoTicketSchema, mongoMessageSchema} = require("./mongooseSchemas");

const Ticket = mongoose.model('Ticket', mongoTicketSchema);
const Message = mongoose.model('Message', mongoMessageSchema)

module.exports.Ticket = Ticket;
module.exports.Message = Message;