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
    const options = { full_name: fullName, email, password, last_logged_in: Date.now() }

    return new User(options).save()
        .then((res) => true)
        .catch((err) => {
            console.error(err)
            return false
        })
}

const getUser = (email, password) => {
    const options = { email: email, password: password }
    return User.findOneAndUpdate(options, { last_logged_in: Date.now() })
        .then((user) => user)
        .catch((err) => null)
}

export default { createUser, getUser }
