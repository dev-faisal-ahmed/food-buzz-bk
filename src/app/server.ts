import mongoose from 'mongoose';
import { Server } from 'http';
import { app } from './app';
import { mongoUri, port } from '../config/config';

let server: Server;

const run = async () => {
  try {
    await mongoose.connect(mongoUri);
    server = app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

run();

process.on('uncaughtException', () => {
  console.log(`Uncaught exception has occurred, shutting down the server`);
  process.exit(1);
});

// handling the unhandled rejections
process.on('unhandledRejection', () => {
  console.log(
    `Sorry we are facing unhandled rejection, shutting down the server`,
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
