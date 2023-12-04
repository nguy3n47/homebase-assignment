import app from './src/app.js';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`exits server express`));
});
