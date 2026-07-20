import mongoose from "mongoose" //loads the Mongoose library.

const connectDB = async () => {} //declares an async function. async lets you use await inside it to pause until a Promise resolves, instead of chaining .then() calls.

await mongoose.connect(process.env.MONGO_URI)// opens a DB connection using the URI from.env. Awaited because it's asynchronous — it makes a network call.

