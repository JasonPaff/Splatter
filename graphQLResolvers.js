const {Ticket} = require("./mongoModels");
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
    typeDefs :{
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
            { _id: args.id }
        );
    },
    getAllTickets: (args) => {
        const emailFilter = args.emailFilter ?
            { createdBy: args.emailFilter} : {}

        return Ticket.find(
            emailFilter,
        );
    },
    updateTicket: ({id, input}) => {
    },
    deleteTicket: ({id}) => {
    }
};


module.exports.rootResolver = rootResolver;