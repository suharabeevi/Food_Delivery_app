const { Category, validate } = require('../model/categoryModel');

module.exports = {
    addcategory: async (req, res) => {
        try {
            const { error } = validate(req.body);
            if (error)
                return res.status(400).send({ message: error.details[0].message });

            const existingCategory = await Category.findOne({ Categoryname: req.body.Categoryname });
            if (existingCategory)
                return res.status(409).send({ message: "Category Already exists" });

            const newCategory = new Category({ Categoryname: req.body.Categoryname });
            await newCategory.save();
            res.status(201).send({ message: "Category added Successfully" });

        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" });
        }
    },
    GetAllcategoty: async(req,res)=>{
        try{
            const AllCategory =await Category.find()
            res.status(201).send({ Data:AllCategory,message: "Get All category" });

        }catch(error){
     return res.status(500).send({ message: "Internal Server Error" });

        }
    }
};
