import Leetcode from "../database/leetcodeModel.js";
const resolvers = {
    Query: {
        leetcode: async (parent, args, contextValue) => {
            return await Leetcode.findById(args.id);
        },
        leetcodes: async (parent, args, contextValue) => {
            return await Leetcode.find({ uid: args.uid });
        }
    },
    Mutation: {
        addLeetcode: async (parent, args, contextValue) => {
            let newLeetcode = new Leetcode({
                uid: args.uid,
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
