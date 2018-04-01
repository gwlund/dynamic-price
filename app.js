var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Experience  = require("./models/experience"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    experienceRoutes = require("./routes/experiences"),
    indexRoutes      = require("./routes/index");
    developmentRoutes = require("./routes/development");
 
var url = process.env.DATABASEURL || "mongodb://localhost/nucleus_experience_v3";
console.log("Using mongo db " + url);
mongoose.connect(url);

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
seedDB(); //seed the database
//Comment out to prevent reseed

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "nucleusnw bellingham",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/experiences", experienceRoutes);
app.use("/experiences/:tag/filter", experienceRoutes);
app.use("/experiences/:id/comments", commentRoutes);

//used for testing random functionality
app.use("/dev", developmentRoutes);

var port = process.env.PORT || 3000;
var ip = process.env.IP || "localhost";

//Working for Heroku setup.  TODO: Need to figure out why code above is not working
//app.listen(process.env.PORT, process.env.IP, function(){
app.listen(port, ip, function(){
   console.log("The NucleusNW Experience Server Has Started " + ip + ":" + port);
});