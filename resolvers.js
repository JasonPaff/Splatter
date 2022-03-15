const {Message, Ticket} = require("./mongoModels");
const {PubSub} = require('apollo-server');
const pubsub = new PubSub();

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
        closeTicket: (parent, {id}) => {
            Ticket.findByIdAndUpdate(
                id, {status: 'closed'}, () => {});
        },
        openTicket: (parent, {id}) => {
            Ticket.findByIdAndUpdate(
                id, {status: 'assigned'}, () => {});
        },
        createTicket: async (parent, {input}) => {
            const ticket = new Ticket(input);
            await ticket.save();
            await pubsub.publish("TICKET_CREATED", {
                ticketCreated: {ticket}
            });
            return ticket;
        },
        assignTicket: async (parent, {id, email}) => {
            await Ticket.findByIdAndUpdate(
                id, {status: 'assigned', assignedTo: email}, () => {});
            const ticket = await Ticket.findOne(
                {_id: id}
            );
            await pubsub.publish("TICKET_ASSIGNED", {
                ticketAssigned: {ticket}
            });
            return ticket;
        },
        createMessage: async (parent, {input}) => {
            const message = new Message(input);
            await message.save();
            await pubsub.publish("MESSAGE_CREATED", {
                messageCreated: {message}
            });
            return message;
        },
    },
    Subscription: {
        messageCreated: {
            subscribe: async () => await pubsub.asyncIterator("MESSAGE_CREATED")
        },
        ticketCreated: {
            subscribe: async () => await pubsub.asyncIterator("TICKET_CREATED")
        },
        ticketAssigned: {
            subscribe: async () => await pubsub.asyncIterator("TICKET_ASSIGNED")
        }
    }
};

module.exports.resolvers = resolvers;