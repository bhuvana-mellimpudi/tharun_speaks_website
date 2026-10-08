const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// MongoDB connection
const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
    try {
        await client.connect();

        console.log("Connected to MongoDB!");

        const db = client.db("tharunSpeaks");
        const collection = db.collection("communityMembers");

        // Join form API
        app.post("/api/join", async (req, res) => {
            try {
                const { name, email, topic } = req.body;

                if (!name || !email || !topic) {
                    return res.status(400).json({
                        success: false,
                        message: "Please fill all fields."
                    });
                }

                await collection.insertOne({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    topic: topic,
                    createdAt: new Date()
                });

                res.json({
                    success: true,
                    message: "You're officially part of the community!"
                });

            } catch (error) {
                console.error("Form submission error:", error);

                res.status(500).json({
                    success: false,
                    message: "Something went wrong. Please try again."
                });
            }
        });

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error);
    }
}

startServer();