var express = require("express");
var router  = express.Router();
var Experience = require("../models/experience");
var middleware = require("../middleware");


//INDEX - show all Experiences
router.get("/", function(req, res){
    // Get all Experiences from DB
    Experience.find({}, function(err, allExperiences){
       if(err){
           console.log(err);
       } else {
          res.render("experiences/index",{experiences:allExperiences});
       }
    });
});

router.get("/dining", function(req, res){
    // Get all dining Experiences from DB
    Experience.find({type: 'dining'}, function(err, allExperiences){
       if(err){
           console.log(err);
       } else {
          res.render("experiences/index",{experiences:allExperiences});
       }
    });
});

router.get("/nightlife", function(req, res){
    // Get all dining Experiences from DB
    Experience.find({type: 'nightlife'}, function(err, allExperiences){
       if(err){
           console.log(err);
       } else {
          res.render("experiences/index",{experiences:allExperiences});
       }
    });
});

router.get("/outdoors", function(req, res){
    // Get all dining Experiences from DB
    Experience.find({type: 'outdoors'}, function(err, allExperiences){
       if(err){
           console.log(err);
       } else {
          res.render("experiences/index",{experiences:allExperiences});
       }
    });
});

router.get("/cultural", function(req, res){
    // Get all dining Experiences from DB
    Experience.find({type: 'cultural'}, function(err, allExperiences){
       if(err){
           console.log(err);
       } else {
          res.render("experiences/index",{experiences:allExperiences});
       }
    });
});

//CREATE - add new Experience to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to Experiences array
    var name = req.body.name;
    var rank = req.body.rank;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newExperience = {name: name, rank: rank, image: image, description: desc, author:author}
    // Create a new Experience and save to DB
    Experience.create(newExperience, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to Experiences page
            console.log(newlyCreated);
            res.redirect("/experiences");
        }
    });
});

//NEW - show form to create new Experience
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("experiences/new"); 
});

// SHOW - shows more info about one Experience
router.get("/:id", function(req, res){
    //find the Experience with provided ID
    Experience.findById(req.params.id).populate("comments").exec(function(err, foundExperience){
        if(err){
            console.log(err);
        } else {
            console.log(foundExperience)
            //render show template with that Experience
            res.render("experiences/show", {experience: foundExperience});
        }
    });
});

// EDIT Experience ROUTE
router.get("/:id/edit", middleware.checkExperienceOwnership, function(req, res){
    Experience.findById(req.params.id, function(err, foundExperience){
        res.render("experiences/edit", {experience: foundExperience});
    });
});

// UPDATE Experience ROUTE
router.put("/:id",middleware.checkExperienceOwnership, function(req, res){
    // find and update the correct Experience
    Experience.findByIdAndUpdate(req.params.id, req.body.experience, function(err, updatedExperience){
       if(err){
           res.redirect("/experiences");
       } else {
           //redirect somewhere(show page)
           res.redirect("/experiences/" + req.params.id);
       }
    });
});

// DESTROY Experience ROUTE
router.delete("/:id",middleware.checkExperienceOwnership, function(req, res){
   Experience.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/experiences");
      } else {
          res.redirect("/experiences");
      }
   });
});


module.exports = router;

