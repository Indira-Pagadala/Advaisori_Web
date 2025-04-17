import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import { google } from 'googleapis';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Google Sheets Setup
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Form submission endpoint
app.post('/api/submit-form', async (req, res) => {
  const formData = req.body;
  
  try {
    // Insert into MySQL
    const query = `
      INSERT INTO form_submissions 
      (name, email, phone, company, employees, message, preferred_date, preferred_time, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    
    db.query(
      query, 
      [
        formData.name,
        formData.email,
        formData.phone,
        formData.company,
        formData.employees,
        formData.message,
        formData.preferredDate,
        formData.preferredTime
      ],
      (err, result) => {
        if (err) {
          console.error('Error inserting into MySQL:', err);
          return res.status(500).json({ error: 'Database error' });
        }
      }
    );

    // Append to Google Sheets
    const values = [[
      new Date().toISOString(),
      formData.name,
      formData.email,
      formData.phone,
      formData.company,
      formData.employees,
      formData.message,
      formData.preferredDate,
      formData.preferredTime
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_ID,
      range: 'Sheet1!A:I',
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 