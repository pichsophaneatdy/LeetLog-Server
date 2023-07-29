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
        leetcode: async(parent, args: {id: string}, contextValue): Promise<LeetcodeInterface[]> => {
            return await Leetcode.findById(args.id)
        },
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
        },
        deleteLeetcode: async(parent, args: {id: string}): Promise<LeetcodeInterface >=>{
            try {
                return await Leetcode.findByIdAndDelete(args.id)
            } catch(error) {
                console.log("Error deleting the element", error)
            }
            
        }
    }
}

export default resolvers