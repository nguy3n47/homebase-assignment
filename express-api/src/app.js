import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import sequelize from './configs/db.config.js';
import modules from './modules';

const app = express();

// middleware
app.use(helmet());
app.use(morgan('combined'));

// compress responses
app.use(compression());

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sync models with the database
(async () => {
  try {
    await sequelize.sync();
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
})();

app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Express API v1',
  });
});
app.use('/api/v1', modules);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
  next();
});

export default app;
