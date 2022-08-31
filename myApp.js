require('dotenv').config();
const mongoose=require("mongoose");
const mySecret = process.env['MONGO_URI'];

mongoose.connect(mySecret,{ useNewUrlParser: true,useUnifiedTopology: true});

// console.log(mySecret);

let personSchema=new mongoose.Schema(
  {
    name:{type:String,required:true},
    age:Number,
    favoriteFoods:[String]
  });

let Person=new mongoose.model("Person",personSchema);

let person1=new Person(
  {
  name:"Arup",
  age:26
  }
);


 person1.save(function(err,data)
             {
               if(err){
                 console.log(err);
               }
               else
               {
                 console.log("Successfully saved");
               }
             });

const createAndSavePerson = function(done) {
  // ... do something (risky) ...the abve function done created is executed only when the content //inside it is successfully executed.
  person1.save(function(err,data)
             {
               if(err){
                 console.log(err);
                 return;
               }
               else
               {
                 console.log("Successfully saved");
                 done(null,data);
               }
             });
  
  if (error) return done(error);
  done(null, result);
};

// const createAndSavePerson = (done) => {
//   done(null /*, data*/);
// };

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
