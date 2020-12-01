const recipes = require('./../recipeMock')
const Recipe = require('./../model/RecipeModel')
const Register = require("../model/userModel")

module.exports={
    gotoHome (req,res){
<<<<<<< HEAD
        // console.log(recipes);
        res.render('pages/home', {title: "Home",
        data:recipes});
=======
        res.render('pages/home', {title: "Home", data: recipes, logInUser: Register});
>>>>>>> 230af3f0aabb952868e987cd7890e79482e4a2d2
    },

    async gotoCategory  (req, res) {
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
<<<<<<< HEAD
        const data = recipes.filter(recipe => recipe.category == req.params.category)
       
        res.render('pages/category', 
                {
=======
        const data = await Recipe.find({category : req.params.category})
        console.log(data)
        res.render('pages/category',
            {
>>>>>>> 230af3f0aabb952868e987cd7890e79482e4a2d2
                title: req.params.category,
                data: data,
            }
        );
    },
    // gotoFeatures(req, res) {
    //     res.render('pages/features', { title: "Features" });
    // },
    gotoExtra(req, res) {
        res.render('pages/extra', { title: "Extra", data: "test" });
    },
    gotoAbout(req, res) {
        res.render('pages/about', { title: "About", data: "About" });
    },
    async gotoTable(req, res) {
        const data = await Recipe.find({})
        res.render('pages/recipesTable', { title: "Table", data:data });
    },
    gotoInventory(req,res){
        res.render('pages/inventory',{title:"Inventory",data:"data"})
    },

    async show(req, res) {
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
        const data = await Recipe.findOne({_id:req.params.id})
        console.log(data)
        res.render('pages/show', {
            title: 'Show',
            data: data,
           
        })
    },

    //add recipe
    async store(req, res) {
        console.log(req.body)
        const recipe = {
            name : req.body.name,
            categoryText : req.body.categoryText,
            category : req.body.category,
            videoUrl : req.body.videoUrl,
            image :  req.body.image,
            reviews : req.body.reviews,
            prepTime : req.body.prepTime,
            cookTime : req.body.cookTime,
            yield : req.body.yield,
            ingredients : req.body.ingredients,
            nutritionFacts : req.body.nutritionFacts,
            notes : req.body.notes,
            tags : req.body.tags,
            instructions : req.body.instructions,
            description : req.body.description
        }

        new Recipe(recipe).save().then((recipe) => {
            console.log(recipe)
            // res.redirect('/recipes/' + recipe.category)
            res.redirect('/table')
        }).catch(err => {
            console.log(err)
        })
    },

    createForm(req, res) {
        res.render('pages/create', {
            title: "Create New Recipe",
            data: {
               
                categoryText: "test"
            }
        })

    },

//update Recipe
   recipeUpdate(req, res) {
        const recipeId = req.params.id
        
        const editedRecipe = {
            name : req.body.name,
            categoryText : req.body.categoryText,
            category : req.body.category,
            videoUrl : req.body.videoUrl,
            image :  req.body.image,
            reviews : req.body.reviews,
            prepTime : req.body.prepTime,
            cookTime : req.body.cookTime,
            yield : req.body.yield,
            ingredients : req.body.ingredients,
            nutritionFacts : req.body.nutritionFacts,
            notes : req.body.notes,
            tags : req.body.tags,
            instructions : req.body.instructions,
            description : req.body.description
        }
        
        Recipe.findOneAndUpdate({ _id: recipeId }, { $set: editedRecipe } ,{ new: true },(error, recipe)=>{
            if(error) return console.log(error);
            console.log(recipe);
            // res.redirect('/recipes/' + recipe.category);
            res.redirect('/table')
            
        })
       
    },

    //go to update recipe
    updateRecipe(req, res) {
        const id = req.params.id
        console.log(id);
        Recipe.findById(id, (error, result)=>{
            if(error) return res.json({message:"there is error"})
            console.log(result);
            res.render('pages/update', {
                title: "Update Recipe",
                data: {
                    categoryText: "test",
                    recipe: result
                }
            })
        })
    },

//delete recipe
    async deleteRecipe(req, res) {
        const id = req.params.id;
        try {
            const deleterecipe = await Recipe.deleteOne({_id:req.params.id})
            if (!deleterecipe) return res.status(400).json({ message: "Not Found" })
            res.redirect('/table')
        } catch (error) {
            res.status(400).json(error)
        }
    }
       // Recipe.findOneAndDelete({ _id:req.params.id}, function (err) {
    //     if(err) console.log(err);
    //     console.log("Successful deletion");
    //   });
}
