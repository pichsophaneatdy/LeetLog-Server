import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
// Connect to MongoDB function
import connectDB from "./database/connectDB.js";
// Schema and Resolvers
import typeDefs from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

dotenv.config();

// Connect to MongoDB and Start the server
const startServer = async() => {
    try {   
        await connectDB(process.env.MONGODB_URI);
        // Create an apollo server
        const server = new ApolloServer({
            typeDefs,
            resolvers
        });
        // Start the server
        const {url} = await startStandaloneServer(server, {
            listen: {port: parseInt(process.env.PORT) || 4000}
        })
        console.log(`🚀 Connected to Database and Server ready at: ${url}`);
    } catch(error) {
        console.log("Error occured while starting the server", error);
        process.exit(1);
    }
}
startServer();