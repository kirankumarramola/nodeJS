const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://kirankumarramola:KiranKumar%4006@cluster0.apvyog4.mongodb.net/test');
  console.log("connected to db");

  const UsersSchema = new mongoose.Schema({
    name: String, place:String
  });
  const Name = mongoose.model('Name', UsersSchema);

  UsersSchema.methods.info = function info(){
    var details = this.name && this.place ? "My name is "+this.name+ " I'm from "+this.place : "No record found";
    console.log(details);
  }


  const kiran = new Name({name:"kiran", place:"hyderabad"});
  const akhil = new Name({name:"Akhil", place:"uppal"});
  const srinesh = new Name({name:"srinesh"});
  //console.log(await kiran.save());
  //console.log(await akhil.save());
  //await srinesh.save();

  console.log(await Name.find());
  //console.log(await Name.find({name:"Akhil"}));

  //console.log(await Name.updateOne({name:"srinesh"},{place:"ecil"}));
  //console.log(await Name.deleteOne({name:"Akhil"}));

  //kiran.info();
}