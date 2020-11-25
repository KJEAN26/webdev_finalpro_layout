const recipies = require('./../recipeMock')

const Recipe = require('./../model/RecipeModel')
module.exports={
    gotoHome (req,res){
        res.render('pages/home', {title: "Home"});
    },

    gotoCategory (req, res) {
        // Recipe.find({category: req.params.category},(err,result)=>{
        //     if(err){
        //        return res.send(err)
        //     }
        //     console.log(result);
            
        //     res.render('pages/appetizers', 
        //     {
        //         title: "Appetizers",
        //         data : result
        //      }
        //     );
        // })
        const data = recipies.filter(recipe => recipe.category == req.params.category)
        res.render('pages/category', 
                {
                title: req.params.category,
                data : data
             }
        );

        
    },
    // gotoMain (req, res) {
    //     res.render('pages/main_course', {title: "Main Course", data: "Main Course"});
    // },

    // gotoDesserts (req, res) {
    //     res.render('pages/desserts', {title: "Desserts", data: "Desserts"});
    // },

    gotoFeatures (req, res) {
        res.render('pages/features', {title: "Features"});
    },

    gotoAbout (req, res) {
        res.render('pages/about', {title: "About", data: "About"});
    },
    async  show  (req,res) {
    //   Recipe.find({_id : req.params.id},(err,result)=>{
    //         if(err){
    //            return res.send(err)
    //         }
    //         console.log(result[0]);
            
    //         res.render('pages/show',{
    //             title: 'Show',
    //             data: result[0]
    //         })
    //     })
    const data =  recipies.find(recipe => recipe._id == req.params.id)
    console.log(data)
    res.render('pages/show',{
            title: 'Show',
            data: data
        })
        
        
    },
    async  store(req,res) {
        console.log(req.body)
        const recipe = {
            name : req.body.name,
            category : req.body.category,
            videoUrl : req.body.videoUrl,
            tags : req.body.tags,
            instructions : req.body.instructions,
            description : req.body.description
        }

        new Recipe(recipe).save().then((recipe)=> {
            console.log(recipe)
            res.redirect('/create/recipes')
        }).catch(err => {
            console.log(err)
        })
    },
    createForm(req,res){
        res.render('pages/create',{
            title: "Create New Recipe"
        })
    }

};
