const {Message, Ticket} = require("./mongoModels");

const resolvers = {
    Query: {
        getTicket: async (parent, {id}) => {
            return Ticket.findOne(
                {_id: id}
            );
        },
        getAllTickets: async (parent, {email}) => {
            const emailFilter = email ?
                {createdBy: email} : {}
            return Ticket.find(
                emailFilter
            );
        },
        getAllAssignedTickets: async (parent, {email}) => {
            return Ticket.find(
                {assignedTo: email}
            );
        },
        getSentMessages: async (parent, {email}) => {
            return Message.find(
                {sender: email}
            );
        },
        getReceivedMessages: async (parent, {email}) => {
            return Message.find(
                {receiver: email}
            );
        },
        getNewMessageId: async () => {
            let maxId = 0;
            const messages = await Message.find({})
            for (let i = 0; i < messages.length; i++) {
                if (messages[i].chatId > maxId) {
                    maxId = messages[i].chatId;
                }
            }
            return maxId + 1;
        },
        getMessageChain: async (parent, {id}) => {
            return Message.find(
                {chatId: id}
            );
        },
    },
    Mutation: {
        createTicket: async (parent, {input}) => {
            const ticket = new Ticket(input);
            ticket.save();
            return ticket;
        },
        closeTicket: (parent, {id}) => {
            Ticket.findByIdAndUpdate(
                id, {status: 'closed'}, () => {});
        },
        openTicket: (parent, {id}) => {
            Ticket.findByIdAndUpdate(
                id, {status: 'assigned'}, () => {});
        },
        assignTicket: (parent, {id, email}) => {
            Ticket.findByIdAndUpdate(
                id, {status: 'assigned', assignedTo: email}, () => {});
        },
        createMessage: (parent, {input}) => {
            const message = new Message(input);
            message.save();
            return message;
        },
    },
};

module.exports.resolvers = resolvers;