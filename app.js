const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import the JSON configuration file
const data = require('./data.json');

app.get('/api', (req, res) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const currentUTC = new Date().toISOString();

  const response = {
    slack_name,
    current_day: currentDay,
    utc_time: currentUTC,
    track,
    github_file_url: data.github_file_url,
    github_repo_url: data.github_repo_url,
    status_code: 200
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
