import Note from "../../models/Note.js";

export const getAllNotes =async(req,res) =>{
    // res.status(200).send("You just fetched the notes.")
    try{
        const notes = await Note.find().sort({createdAt:-1});//newest first
        res.status(200).json(notes)
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error."})
    }
}
//getNote
export const getNoteById = async(req,res) =>{
    try{
        const note = await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Note not found!"});
        res.json(note);
    }catch(error){
        console.error("Error in getNoteById",error);
        res.status(500).json({message:"Internal server error"});
    }
}

//createNotes
export const createNotes = async(req,res) =>{
    // res.status(201).json({message:"Notes created successfully!"});
    try{
        const {title,content} = req.body
        // console.log(title,content);
        const note = new Note({title,content})

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}

//updateNotes
export const updateNotes = async (req,res) =>{
    // res.status(200).json({message:"Notes updated succesfully!"});
    try{
      const {title,content} = req.body;
      //what if the id doesn't match

      const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{
        new:true
      });

      if(!updateNotes) return res.status(404).json({message:"Note not Found!"});

      res.status(200).json({message:"Note updated successfully!"})
    }catch(error){
        console.log("error in updateNote Controller.");
    }
}

//deleteNotes
export const deleteNotes = async (req,res) =>{
    // res.status(200).json({message:"Notes Deleted Successfully!"});

    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) res.status(404).json({message:"Note not found"});

        res.status(200).json({message:"Note deleted successfully!"})

    }catch(error){
        console.log(error);
    }
}