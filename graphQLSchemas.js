const {buildSchema} = require("graphql");

// Construct a schema, using GraphQL schema language
// input TicketInput is for creating
// type Ticket is for updating
const graphTicketSchema = buildSchema(`
  input TicketInput {
    title: String
    severity: String
    priority: Int
    type: String
    product: String
    browser: String
    screenshot: String
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

  type Ticket {
    id: ID!
    title: String
    severity: String
    priority: Int
    type: String
    product: String
    browser: String
    screenshot: String
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

  type Query {
    getTicket(id: ID!): Ticket
    getAllTickets(emailFilter: String) : [Ticket]
  }

  type Mutation {
    createTicket(input: TicketInput): Ticket
    updateTicket(id: ID!, input: TicketInput): Ticket
    deleteTicket(id: ID!) : Ticket
  }
  
  scalar Date  
`);

module.exports.graphTicketSchema = graphTicketSchema;