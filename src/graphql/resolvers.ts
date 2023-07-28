import Leetcode from "../database/leetcodeModel.js";

interface LeetcodeInterface {
    uid: string,
    code: number,
    question: string,
    date: number,
    duration: number,
    difficulty: string,
    solution: string
}

const resolvers = {
    Query: {
        leetcodes: async(parent, args: {uid: string}, contextValue): Promise<LeetcodeInterface[]>  => {
            return await Leetcode.find({uid: args.uid});
        }
    },
    Mutation: {
        addLeetcode: async(parent, args: {
            uid: string,
            code: number,
            question: string,
            date: number,
            duration: number,
            difficulty: string,
            solution: string
        },contextValue ) => {
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
}

export default resolvers