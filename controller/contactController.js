const asyncHandler = require("express-async-handler");
//@desc get all contact
//@route get /api/contacts
//@access public 
const getContacts = asyncHandler(async (req,res) =>{
    res.status(200).json({message: "get all contacts"});
}) ;


//@desc create new contact
//@route post /api/contacts
//@access public 
const createContact =  asyncHandler(async (req,res) =>{
    console.log("the request body is :",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
        
    }
    res.status(201).json({message: "create contact"});
});

//@desc get contact
//@route get /api/contacts/:id
//@access public 
const getContact =  asyncHandler(async(req,res) =>{
    res.status(200).json({message: `get contacts for ${req.params.id}` });
});

//@desc update  contact
//@route put /api/contacts
//@access public 
const updateContact =  asyncHandler( async(req,res) =>{
    res.status(200).json({message: `update contacts for ${req.params.id}`  });
})


//@desc delete  contact
//@route delete /api/contacts/:id
//@access public 
const deleteContact = asyncHandler( async(req,res) =>{
    res.status(200).json({message: `delete contacts for ${req.params.id}` });
})


module.exports = { getContacts, createContact ,getContact, updateContact, deleteContact};