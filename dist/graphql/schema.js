const typeDefs = `#graphql
    type Leetcode {
        id: ID!
        code: Int!
        question: String!
        date: Float!
        duration: Int!
        difficulty: String!
        solution: String!
    }
    type Query {
        leetcodes: [Leetcode]
    }
    type Mutation {
        addLeetcode(code: Int!, question: String!, date: Float!, duration: Int!, difficulty: String!, solution: String!): Leetcode
    }
`;
export default typeDefs;
