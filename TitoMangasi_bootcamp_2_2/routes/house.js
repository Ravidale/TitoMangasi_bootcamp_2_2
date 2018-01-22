const express = require("express");
const House = require("../models/house");
const router = express.Router();

module.exports = router;



    router.get("/:id", (req, res) => {
    
        House.findById(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    
    });
    
    router.get("/", (req, res) => {
    
        House.find({}, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json(result)
            }
        });
    });
    
    router.post("/", (req, res) => {
    
        let date = new Date();    
            if (error) return res.status(500).send(error);
            
            let newObj = new House({
                house_name : req.body.house_name,
                house_address : req.body.house_address
            });
            
            newObj.save((error) => {
                if (error) {
                    res.status(500).send(error);
                }
                else{
                    res.json(newObj);
                }
            });
    });
    
    router.delete("/:id", (req, res) => {
    
        House.findByIdAndRemove(req.params.id, (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else{
                res.json({ message : "Data deleted" })
            }
        });
        
    });
    
    router.put("/", (req, res) => {
        
        let newObj = {
            house_name : req.body.house_name,
            house_address : req.body.house_address
        };
    
        House.findByIdAndUpdate(req.body._id, newObj,  (error, result) => {
            if(error){
                res.status(500).json(error);
            }
            else {
                res.status(500).json({ message : "Data updated" })
            }
        });
    
    });

    return router;

