var mongoose = require("mongoose");

var experienceSchema = new mongoose.Schema({
   name: String,
   description: String,
   type: String,
   rank: Number,
   region: String,
   tags: [ String ],
   website: String,
   image: String,
   address: {
       address1: String,
       address2: String,
       city: String,
       state: String,
       zip: String,
       phone: String,
       map_url: String
   },
   external_links: {
       url1: String,
       url2: String,
       url3: String
   },
   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Experience", experienceSchema);