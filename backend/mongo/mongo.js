import mongoose from 'mongoose'

// You can use the mongodb I've created for this assessment
// mongodb+srv://mario:p9j64HJJTKR9aXK1@bdswiss.grygm9l.mongodb.net/?retryWrites=true&w=majority
const MONGODB_URL = process.env.MONGODB || undefined
const mongoContext = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
export const connectToMongoDb = () => {
    mongoose.connect(MONGODB_URL, mongoContext)
        .then((res) => {
            console.log('Successfully connected to database!')
            return true
        })
        .catch((err) => {
            if (err) {
                console.error('Failed to connect to database!')
                console.error(err)
                return false
            }
        })
}
