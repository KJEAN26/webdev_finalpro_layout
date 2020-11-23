
module.exports={
    gotoHome (req,res){
        res.render('pages/home', {title: "Home"});
    },

    gotoAppetizers (req, res) {
        res.render('pages/appetizers', {title: "Appetizers"});
    },

    gotoMain (req, res) {
        res.render('pages/main_course', {title: "Main Course"});
    },

    gotoDesserts (req, res) {
        res.render('pages/desserts', {title: "Desserts"});
    },

    gotoFeatures (req, res) {
        res.render('pages/features', {title: "Features"});
    },

    gotoAbout (req, res) {
        res.render('pages/about', {title: "About"});
    }
};
