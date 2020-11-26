const recipes = require('./../recipeMock')
const Recipe = require('./../model/RecipeModel')

module.exports={
    gotoHome (req,res){
        res.render('pages/home', {title: "Home",data:recipes});
    },

    gotoCategory(req, res) {
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
                data: data
            }
        );


    },

    gotoFeatures(req, res) {
        res.render('pages/features', { title: "Features" });
    },
    gotoExtra(req, res) {
        res.render('pages/extra', { title: "Extra",data:"test" });
    },
    gotoAbout(req, res) {
        res.render('pages/about', { title: "About", data: "About" });
    },
    gotoTable(req, res) {
        res.render('pages/recipesTable', { title: "Table", data: "data" });
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
        const data = recipies.find(recipe => recipe._id == req.params.id)
        console.log(data)
        res.render('pages/show', {
            title: 'Show',
            data: data
        })


    },

    //add recipe
    async store(req, res) {
        console.log(req.body)
        const recipe = {
            name : req.body.name,
            category : req.body.category,
            videoUrl : req.body.videoUrl,
            image : req.body.image,
            reviews : req.body.reviews,
            prepTime : req.body.prepTime,
            cookTime : req.body.cookTime,
            yield : req.body.yield,
            ingredientHeader : req.body.ingredientHeader,
            ingredients : req.body.ingredients,
            nutritionFacts : req.body.nutritionFacts,
            notes : req.body.notes,
            tags : req.body.tags,
            instructions : req.body.instructions,
            description : req.body.description
        }

        new Recipe(recipe).save().then((recipe) => {
            console.log(recipe)
            res.redirect('/create/recipes')
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

    async recipeUpdate(req, res) {
        const recipeId = req.params.id
        const editedRecipe = {
            name: req.body.name,
            category: req.body.category,
            videoUrl: req.body.videoUrl,
            tags: req.body.tags,
            instructions: req.body.instructions,
            description: req.body.description
        }
        const recipe = Recipe.findOneAndUpdate({ _id: recipeId }, { $set: editedRecipe }, { new: true })
        res.redirect('/recipes/' + recipe.category)
    },

    //update recipe
    updateRecipe(req, res) {
        res.render('pages/update', {
            title: "Update Recipe",
            data: {
                categoryText: "test"
            }
        })
    },


    async deleteRecipe(req, res) {
        const id = req.params.id;
        try {
            const deleterecipe = await Recipe.findByIdAndDelete(id)
            if (!deleterecipe) return res.status(400).json({ message: "Not Found" })
            res.redirect('/recipes/' + recipe.category)
        } catch (error) {
            res.status(400).json(error)
        }
    }



};
