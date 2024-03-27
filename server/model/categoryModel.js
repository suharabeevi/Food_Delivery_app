const mongoose = require("mongoose");
const Joi = require("joi");
const categorySchema = new mongoose.Schema({
    Categoryname: { type: String, required: true },
   
})
const Category = mongoose.model("category", categorySchema);

const validate = (data) => {
    const schema = Joi.object({
        Categoryname: Joi.string().required().label("categoryname"),
        
      
    });
  
    return schema.validate(data);
  };
  
  module.exports = { Category, validate };
