import express from "express";
import { Notes } from "./database/models.js";


const app = express()

app.get("/books", async (req, res) => {
    res.send(await Notes.findAll())
})
app.post("/books", async (req, res) => {
    res.send(await Notes.create({
        name: req.body.name
    }))
})

app.listen(3000)
