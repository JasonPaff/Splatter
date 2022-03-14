const {Ticket, Message} = require("./mongoModels");
const {GraphQLScalarType} = require("graphql");

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    parseValue(value) {
        return new Date(value);
    },
    serialize(value) {
        return value.toISOString();
    },
});

const rootResolver = {
    typeDefs: {
        Data: dateScalar
    },
    createTicket: ({input}) => {
        const ticket = new Ticket(input);
        ticket.save();
        return ticket;
    },
    getTicket: (args) => {
        return Ticket.findOne(
            {_id: args.id}
        );
    },
    getAllTickets: (args) => {
        const emailFilter = args.emailFilter ?
            {createdBy: args.emailFilter} : {}

        return Ticket.find(
            emailFilter
        );
    },
    getAllAssignedTickets: (args) => {
        const emailFilter = args.emailFilter ?
            {assignedTo: args.emailFilter} : {}

        return Ticket.find(
            emailFilter
        );
    },
    closeTicket: (args) => {
        Ticket.findByIdAndUpdate(
            args.id, {status: 'closed'}, () => {
            });
    },
    openTicket: (args) => {
        Ticket.findByIdAndUpdate(
            args.id, {status: 'assigned'}, () => {
            });
    },
    assignTicket: (args) => {
        Ticket.findByIdAndUpdate(
            args.id, {status: 'assigned', assignedTo: args.email}, () => {
            });
    },
    updateTicket: (args) => {
    },
    deleteTicket: ({id}) => {
    },
    createMessage: (args, {pubsub}) => {
        console.log('test');
        const message = new Message(args.input);
        message.save();
        pubsub.publish('message', {
            message: {
                mutation: 'CREATED',
                data: {...message}
            },
        });
        return message;
    },
    getSentMessages: (args) => {
        return Message.find(
            {sender: args.emailFilter}
        );
    },
    getReceivedMessages: (args) => {
        return Message.find(
            {receiver: args.emailFilter}
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
    getMessageChain: (args) => {
        return Message.find(
            {chatId: args.id}
        );
    },
    message: {
        subscribe(parent, args, {pubsub}) {
            return pubsub.asyncIterator('message');
        }
    }
};

module.exports.rootResolver = rootResolver;