const typeDefs = `#graphql
    type Leetcode {
        id: ID!
        uid: String!
        code: Int!
        question: String!
        date: Float!
        duration: Int!
        difficulty: String!
        solution: String!
    }
    type Query {
        leetcode(id: ID!): Leetcode
        leetcodes(uid: ID!): [Leetcode]
    }
    type Mutation {
        addLeetcode(uid: ID!,code: Int!, question: String!, date: Float!, duration: Int!, difficulty: String!, solution: String!): Leetcode
        deleteLeetcode(id:ID!): Leetcode
    }
`

export default typeDefs;