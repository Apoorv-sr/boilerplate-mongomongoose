require('dotenv').config();
const mongoose=require("mongoose");
const mySecret = process.env['MONGO_URI'];


mongoose.connect(mySecret,{ useNewUrlParser: true,useUnifiedTopology: true});

let personSchema=new mongoose.Schema(
  {
    name:{type:String,required:true},
    age:Number,
    favoriteFoods:[String]
  });

let Person=new mongoose.model("Person",personSchema);

const person1 = new Person({name: "Ashu", age: 27, favoriteFoods: ["eggs", "fish", "fresh fruit"]});
const person2 = new Person({name: "Apoorv", age: 25, favoriteFoods: ["eggs"]});

let arrayOfPeople=[person1,person2];

const createManyPeople = function(arrayOfPeople,done) 
{
Person.create(arrayOfPeople,function(err,people)
              {
                if(err)
                {
                  console.log(err);
                  done(err);
                }
                else
                {
                  console.log(people);
                  done(null,people);
                }
              });
};

const findPeopleByName=function(personName,done)
  {
    Person.find({name:personName},function(err,found)
                {
                  if(err)
                  {
                    console.return(err);
                  }
                  else
                  {
                    done(null,found);
                  }
                });
  }

// const findPeopleByName = (personName, done) => {
//   done(null /*, data*/);
// };

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
// exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
