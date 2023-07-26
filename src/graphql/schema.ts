const typeDefs = `#graphql
    type Leetcode {
        id: ID!
        code: Int!
        question: String!
        date: Int!
        duration: Int!
        difficulty: String!
        solution: String!
    }
    type Query {
        leetcodes: [Leetcode]
    }
    type Mutation {
        addLeetcode: Leetcode
    }
`

export default typeDefs;