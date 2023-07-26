import Leetcode from "../database/leetcodeModel.js";
const resolvers = {
    Query: {
        leetcodes: async () => {
            return await Leetcode.find();
        }
    },
    Mutation: {
        addLeetcode: async (parent, args, contextValue) => {
            let newLeetcode = new Leetcode({
                code: args.code,
                question: args.question,
                date: args.date,
                duration: args.duration,
                difficulty: args.difficulty,
                solution: args.solution
            });
            return await newLeetcode.save();
        }
    }
};
export default resolvers;
