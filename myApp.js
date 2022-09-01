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

const findOneByFood=function(food,done)
  {
    Person.findOne({favoriteFoods:food},function(err,found)
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
  };


// const findOneByFood = (food, done) => {
//   done(null /*, data*/);
// };

const findPersonById=function(personId,done)
  {
    Person.findById({_id:personId},function(err,found)
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
  };

// const findPersonById = (personId, done) => {
//   done(null /*, data*/);
// };

const findEditThenSave=function(personId,done)
  {
    const foodToAdd = "hamburger";
    Person.findById({_id:personId},function(err,found)
                    {
                      if(err)
                      {
                        console.log("foundById is returning this in eroor "+found);
                        console.return(err);
                      }
                      else
                      {
                        found.favoriteFoods.push(foodToAdd);
                        found.save(function(err,success)
                                   {
                                     if(err)
                                     {
                                       console.log("This is the eror "+err);
                                     }
                                     else
                                     {
                                       console.log("This is success "+success);
                                       done(null,found);
                                     }
                                   });
                        
                      }
                    });
  };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };

const findAndUpdate=function(personName,done)
  {
    const ageToSet = 20;
    Person.findOne({name:personName},function(err,found)
                   {
                     if(err)
                     {
                       console.return(err);
                     }
                     else
                     {
                       found.age=ageToSet;
                       found.save(function(err,success)
                                  {
                                    if(err)
                                    {
                                      console.return(err);
                                    }
                                    else
                                    {
                                      done(null,success);
                                    }
                                  });
                     }
                   });
  }

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;

//   done(null /*, data*/);
// };

const removeById=function(personId,done)
  {
    Person.findByIdAndRemove(personId,function(err,removed)
                             {
                               if(err)
                               {
                                 console.log("enterd error section");
                                 console.return(err);
                               }
                               else
                               {
                                done(null,removed); 
                               }
                             });
  }

// const removeById = (personId, done) => {
//   done(null /*, data*/);
// };


const removeManyPeople=function(done)
  {
    const nameToRemove = "Mary";
    Person.remove({name:nameToRemove},function(err,removedPeople)
                  {
                    if(err)
                    {
                      console.return(err);
                    }
                    else
                    {
                      done(null,removedPeople)
                    }
                  });
  };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";

//   done(null /*, data*/);
// };

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
