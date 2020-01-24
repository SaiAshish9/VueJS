
const mongoose=require('mongoose')
mongoose.set("debug",true)
mongoose.Promise=Promise

mongoose.connect("mongodb+srv://Sai_99:shirdisai@cluster0-4bk2v.mongodb.net/nutriyouDB",{
  keepAlive:true,
  useNewUrlParser:true,
  useUnifiedTopology: true
})

module.exports.User=require("./user")
