import express from 'express';
import fs from 'fs/promises';

const router = express.Router();
const dataPath = './data/topics.json'; // Define the correct path to your data file

router.get('/', async (req, res) => {
    try {
        const topicname = req.query.topicname || Object.keys(req.query)[0]; // Handle both cases

        const fileData = await fs.readFile(dataPath, 'utf-8');
        const topics = JSON.parse(fileData);

        if (topicname) {
            if (!topicname.trim()) {
                return res.status(400).json({ error: 'Invalid query parameter: topicname' });
            }

            const topic = topics.find(t => t.name.toLowerCase() === topicname.toLowerCase());
            if (!topic) {
                return res.status(404).json({ error: 'Topic not found' });
            }

            return res.status(200).json(topic);
        }

        res.status(200).json(topics);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve topics' });
    }
});

export default router;
