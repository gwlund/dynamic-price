var Experience = require("../models/experience");
var Comment = require("../models/comment");

// all the middleare goes here
var middlewareObj = {};

middlewareObj.checkExperienceOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Experience.findById(req.params.id, function(err, foundExperience){
           if(err){
               req.flash("error", "Experience not found");
               res.redirect("back");
           }  else {
               // does user own the Experience? Currently no experience author
            //if(foundExperience.author.id.equals(req.user._id)) {
                next();
            //} else {
            //    req.flash("error", "You don't have permission to do that");
            //    res.redirect("back");
            //}
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
 if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the comment?
            if(foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                req.flash("error", "You don't have permission to do that");
                res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;