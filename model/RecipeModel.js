const mongoose = require('mongoose')

const RecipeSchema = mongoose.Schema({
    name : {
        required: true,
        type :String
    },
    categoryText : {
        required : true,
        type : String
    },
    category : {
        required : true,
        type : String,
    },
    tags : {
        required : true,
        type : [String],
    },
    videoUrl : {
        required :true,
        type: String,
    },
    image : {
        required :true,
        type: String,
    },
    // reviews : {
    //     required :true,
    //     type: String,
    // },
    prepTime : {
        required :true,
        type: String,
    },
    cookTime : {
        required :true,
        type: String,
    },
    yield : {
        required :true,
        type: String,
    },
    ingredients : {
        required: true,
        type: [String],
    },
    nutritionFacts : {
        required: true,
        type: [String],
    },
    description : {
        required : true,
        type : String,
    },
    instructions : {
        required : true,
        type : [String],
    },
    notes : {
        required: true,
        type : String,
    }
  
})

module.exports = mongoose.model('Recipe', RecipeSchema)