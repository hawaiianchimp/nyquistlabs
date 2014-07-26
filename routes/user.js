/*
 * GET users listing.
 */
 
var mongoose = require('mongoose');
var Employee = mongoose.model('Employee', { name: String, position: String, img_url: String,  about: String});
 
exports.list = function(req, res){
  Employee.find({}, function(error, data){
    if(!error)
      res.send(data)
    else
      console.log(error)
  });
};

exports.about = function(req,res){
    Employee.find({}, function(error, data){
    if(!error)
      res.render('about',{
        users: data
      });
    else
      console.log(error)
  });
}

exports.create = function(req,res){

    var sean = new Employee({
                name:"Sean Burke", 
                position:"CEO",
                img_url: "https://graph.facebook.com/hawaiianchimp/picture?width=150&height=150",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            });
    sean.save(function (err) {
      if (err) // ...
      console.log('meow');
    });
    
    var ryan = new Employee({
                name:"Ryan Garcia", 
                position:"CTO",
                img_url: "https://media.licdn.com/media/p/2/005/008/3e9/14ab9f8.jpg",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                
            });
    ryan.save(function (err) {
      if (err) // ...
      console.log('meow');
    });
    
    var eli = new Employee({
                name:"Eli Uc", 
                position:"CIO",
                img_url: "https://graph.facebook.com/eli.uc/picture?width=150&height=150",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            });
    eli.save(function (err) {
      if (err) // ...
      console.log('meow');
    });
    
    var jlai = new Employee({
                name:"Jennifer Lai", 
                position:"Head of Human Resources",
                img_url: "https://graph.facebook.com/jlaijr/picture?width=150&height=150",
                about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            });
    jlai.save(function (err) {
      if (err) // ...
      console.log('meow');
    });
    
    res.send("created users!");
    console.log("created users!");
}