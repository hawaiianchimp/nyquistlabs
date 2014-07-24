
/*
 * GET users listing.
 */
 
var users = {
    Users: [
        {
            name:"Sean Burke", 
            position:"CEO",
            img_url: "https://graph.facebook.com/hawaiianchimp/picture?width=150&height=150",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        }, 
        {
            name:"Ryan Garcia", 
            position:"CTO",
            img_url: "https://media.licdn.com/media/p/2/005/008/3e9/14ab9f8.jpg",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            
        }, 
        {
            name:"Eli Uc", 
            position:"CIO",
            img_url: "https://graph.facebook.com/eli.uc/picture?width=150&height=150",
            about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        }
        ]
};

exports.list = function(req, res){
  res.send(users);
};

exports.getAll = users;