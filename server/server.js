const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;


app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('./survey.db', (err) => {
    if (err) {
        console.error('Error opening database:', err);
    } else {
        console.log('Connected to SQLite database');
        // Create surveys table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS survey_responses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            responses TEXT,
            submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);
    }
});

app.post('/api/submit-survey', (req, res) => {
    const responses = JSON.stringify(req.body);
    
    db.run('INSERT INTO survey_responses (responses) VALUES (?)', [responses], function(err) {
        if (err) {
            console.error('Error saving survey:', err);
            return res.status(500).json({ error: 'Failed to save survey response' });
        }
        res.json({ message: 'Survey submitted successfully', id: this.lastID });
    });
});

app.get('/api/survey-responses', (req, res) => {
    db.all('SELECT * FROM survey_responses', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});