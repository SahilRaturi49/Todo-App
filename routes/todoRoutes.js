import express from 'express'
import { Todo } from '../models/todoModels.js'

const router = express.Router()

router.post('/todos', async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save();
        res.status(201).send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/todos', async (req, res) => {
    try {
        const todo = await Todo.find()
        res.send(todo)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.put('/todos/:id', async (req, res) => {
    try {
        console.log("Updating Todo with ID:", req.params.id);
        console.log("Request Body:", req.body);

        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,  // Return the updated document
            runValidators: true  // Ensure validation rules are applied
        });

        if (!todo) {
            return res.status(404).send({ message: "Task not found" });
        }

        res.send(todo);
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(400).send(error);
    }
});


router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
            return res.status(404).send({message: "Todo not found"})
        }
        res.status(200).send({message:"Task deleted succefully"});
    } catch (error) {
        res.status(500).send(error)
    }
})

export default router;