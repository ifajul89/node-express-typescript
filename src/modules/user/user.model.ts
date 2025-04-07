import { model, Schema } from 'mongoose'
import { IUser } from './user.interface'

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    // we can also add a message like this if the value is not passed in the body
    required: [true, 'Please provide your name'],
    // we can specify min and max length
    minlength: 5,
    laxlength: 30,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // for validation
    validate: {
      validator: function (value: string) {
        // email validator regex
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
      },
      message: '{VALUE} is not a valid email',
    },
  },
  photo: String,
  role: {
    type: String,
    // by enum we are defining only these will be supported
    enum: ['user', 'amdin'],
    required: true,
    // defining the default role as user
    default: 'user',
  },
  userStatus: {
    type: String,
    //we can also specify enum with this syntax
    enum: {
      values: ['active', 'inactive'],
      // also in mongoose if we add {VALUE} into the message we can see the value that has been given in the output
      message: '{VALUE} is invalid, please provide a valid activity status',
    },
    required: true,
    default: 'active',
  },
})

const User = model<IUser>('User', userSchema)

export default User
