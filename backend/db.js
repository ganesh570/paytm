const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://admin:Ganesh123@cluster0.phzte32.mongodb.net/paytm')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:30
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:30

    }
});

const accountsSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type: Number,
        required:true
    }
})

const User=mongoose.model('User',userSchema);
const Accounts=mongoose.model('Accounts',accountsSchema)
module.exports={
    User,
    Accounts
};