import Leetcode from "../database/leetcodeModel.js";

interface LeetcodeInterface {
    code: number,
    question: string,
    date: number,
    duration: number,
    difficulty: string,
    solution: string
}

const resolvers = {
    Query: {
        leetcodes: (): Promise<LeetcodeInterface[]>  => {
            return Leetcode.find();
        }
    },
    Mutation: {
        addLeetcode: (parent, args: {
            code: number,
            question: string,
            date: number,
            duration: number,
            difficulty: string,
            solution: string
        },contextValue ) => {
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
}

export default resolvers