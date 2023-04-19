import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const userSchema = mongoose.Schema({
    full_name: String,
    email: String,
    password: String,
    last_logged_in: Number,
})
const User = mongoose.model('User', userSchema)

const createUser = (fullName, email, password) => {
    const options = { full_name: fullName, email, password, last_logged_in: new Date.now() }

    return new User(options)
        .save((err) => {
            if (err) {
                console.error(err)
                return false
            }
            return true
        })
}

const getUser = (email, password) => {
    const options = { email, password }
    const user = User.findOne(options, (user, err) => {
        if (err) {
            return null
        }
        return user
    })
    if (user) {
        user.updateOne({ last_logged_in: new Date.now() })
    }
    return user
}

export default { createUser, getUser }
