import Leetcode from "../database/leetcodeModel.js";
const resolvers = {
    Query: {
        leetcodes: () => {
            return Leetcode.find();
        }
    },
    Mutation: {
        addLeetcode: (parent, args, contextValue) => {
            let newLeetcode = new Leetcode({
                code: args.code,
                question: args.question,
                date: args.date,
                duration: args.duration,
                difficulty: args.difficulty,
                solution: args.solution
            });
            return newLeetcode.save();
        }
    }
};
export default resolvers;
