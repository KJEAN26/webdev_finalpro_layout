const recipes = require('./../recipeMock')
const Recipe = require('./../model/RecipeModel')
const Register = require("../model/userModel")
const underscore = require("underscore");

module.exports = {
    gotoHome(req, res) {
        res.render('pages/home', { title: "Home", data: recipes, logInUser: req.user });
    },

    //get all recipe
    async getAllRecipe(req, res){
        
        res.json({res: recipes});
      
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
        const data = await Recipe.find({ category: req.params.category })
        console.log(data)
        res.render('pages/category',
            {
                title: req.params.category,
                data: data,
                logInUser: req.user

            }
        );
    },
    gotoExtra(req, res) {
    
        res.render('pages/extra', { title: "Dashboard", data: "test", logInUser: req.user });
    },
    gotoAbout(req, res) {
        res.render('pages/about', { title: "About", data: "About",  logInUser: req.user  });
    },
    async gotoTable(req, res) {
        const data = await Recipe.find({})
        res.render('pages/recipesTable', { title: "Recipes", data: data, logInUser: req.user });
    },
    gotoInventory(req, res) {
        res.render('pages/inventory', { title: "Inventory", data: "data", logInUser: req.user })
    },


    gotoLogin(req, res) {
        res.render('pages/login', { title: "Login", data: "data" })
    },

    gotoPinned(req,res){
        res.render('pages/pinnedRecipe',{title:"Pinned Recipe",data:"data",logInUser:req.user})
    },

    async show(req, res) {
        const data = await Recipe.findOne({_id:req.params.id})
        console.log(data)
        res.render('pages/show', {
            title: 'Show',
            data: data,
            logInUser: req.user

        })


    },

    //add recipe
    async store(req, res) {
        try {
            console.log(req.body)
        const recipe = {
            name: req.body.name,
            categoryText: req.body.categoryText,
            category: req.body.category,
            videoUrl: req.body.videoUrl,
            image: req.body.image,
            reviews: req.body.reviews,
            prepTime: req.body.prepTime,
            cookTime: req.body.cookTime,
            yield: req.body.yield,
            ingredients: req.body.ingredients,
            nutritionFacts: req.body.nutritionFacts,
            notes: req.body.notes,
            tags: req.body.tags,
            instructions: req.body.instructions,
            description: req.body.description,
            status:null
        }

        await new Recipe(recipe).save().then((recipe) => {
            console.log(recipe)
            // res.redirect('/recipes/' + recipe.category)
            res.redirect('/table')
        }).catch(err => {
            console.log(err)
        })
        } catch (error) {
            
        }
        
    },




    createForm(req, res) {
        res.render('pages/create', {
            title: "Create New Recipe",
            logInUser:req.user,
            data: {

                categoryText: "test",
                
            }
        })

    },
    //update Recipe
    recipeUpdate(req, res) {
        const recipeId = req.params.id


        const editedRecipe = {
            name: req.body.name,
            categoryText: req.body.categoryText,
            category: req.body.category,
            videoUrl: req.body.videoUrl,
            image: req.body.image,
            reviews: req.body.reviews,
            prepTime: req.body.prepTime,
            cookTime: req.body.cookTime,
            yield: req.body.yield,
            ingredients: req.body.ingredients,
            nutritionFacts: req.body.nutritionFacts,
            notes: req.body.notes,
            tags: req.body.tags,
            instructions: req.body.instructions,
            description: req.body.description

        }

        Recipe.findOneAndUpdate({ _id: recipeId }, { $set: editedRecipe }, { new: true }, (error, recipe) => {
            if (error) return console.log(error);
            console.log(recipe);
            // res.redirect('/recipes/' + recipe.category);
            res.redirect('/table')

        })

    },


    //go to update recipe
    updateRecipe(req, res) {
        const id = req.params.id
        console.log(id);
        Recipe.findById(id, (error, result) => {
            if (error) return res.json({ message: "there is error" })
            console.log(result);
            res.render('pages/update', {
                title: "Update Recipe",
                logInUser:req.user,
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
            const deleterecipe = await Recipe.deleteOne({ _id: req.params.id })
            if (!deleterecipe) return res.status(400).json({ message: "Not Found" })
            res.redirect('/table')
        } catch (error) {
            res.status(400).json(error)
        }
    },


    async dashboard(req, res) {
        try {
            const data = await Recipe.find();
            const recipe = underscore.countBy(data, function (result) {
                return result.category;
            })
            return res.render('pages/inventory', {
                recipe: recipe,
                header :'asd',
                logInUser : req.user

            })

        } catch (error) {
            res.status(400).json(error)
        }
    },



    async dashboardAnalytics(req, res) {
        const data = await Recipe.find();
        const recipe = underscore.countBy(data, function (result) {
            return result.category;
        })
        console.log(recipe)
       return res.json({
        recipe:recipe
       })

    },



}