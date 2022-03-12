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
        ticket.save((error) => {
            if (error) {
                //something
            } else {
                // something else
            }
        });
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
            emailFilter,
        );
    },
    updateTicket: ({id, input}) => {
    },
    deleteTicket: ({id}) => {
    },
    createMessage: ({input}) => {
        const message = new Message(input);
        message.save((error) => {
            if (error) {
                //something
            } else {
                // something else
            }
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
        for (let i = 0; i < messages.length; i++ ) {
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
    }
};

module.exports.rootResolver = rootResolver;