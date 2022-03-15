const {gql} = require("apollo-server");

const schema = gql`
    
    input TicketInput {
        title: String
        severity: String
        priority: Int
        type: String
        product: String
        browser: String
        screenshot: String
        screenshotType: String
        summary: String
        reproductionSteps: String
        expectedResult: String
        actualResult: String
        createdAt: Date
        createdBy: String
        assignedTo: String
        status: String
    }

    input MessageInput {
        chatId: Int
        subject: String
        message: String
        sender: String
        receiver: String
        sentAt: Date
    }

    type Ticket {
        id: ID!
        title: String
        severity: String
        priority: Int
        type: String
        product: String
        browser: String
        screenshot: String
        screenshotType: String
        summary: String
        reproductionSteps: String
        expectedResult: String
        actualResult: String
        createdAt: Date
        createdBy: String
        updatedAt: Date
        updatedBy: String
        assignedTo: String
        status: String
    }

    type Message {
        id: ID!
        chatId: Int
        subject: String
        message: String
        sender: String
        receiver: String
        sentAt: Date
    }

    type Query {
        getTicket(id: ID!): Ticket
        getAllTickets(email: String) : [Ticket]
        getAllAssignedTickets(email: String) : [Ticket]
        getSentMessages(email: String): [Message]
        getReceivedMessages(email: String): [Message]
        getNewMessageId : Int
        getMessageChain(id: Int): [Message]
    }

    type Mutation {
        createTicket(input: TicketInput): Ticket
        closeTicket(id: ID!) : Ticket
        openTicket(id: ID!) : Ticket
        assignTicket(id: ID!, email: String) : Ticket
        createMessage(input: MessageInput): Message
    }

    scalar Date
`;

module.exports.schema = schema;