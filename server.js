const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`\n🎄 Christmas Countdown Server Running! 🎄`);
  console.log(`\n✨ Open your browser and visit: http://localhost:${PORT}`);
  console.log(`\n📝 Licensed and Created by Logan Ingle`);
  console.log(`\n⏱️  Press Ctrl+C to stop the server\n`);
});
