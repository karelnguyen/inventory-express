import express from "express";
import { client } from "./src/database";

// import { Client } from 'pg'
// const client = new Client()
// await client.connect()

async function connectDb() {
  try {
    await client.connect();
    console.log("Connected to database");
  } catch (e) {
    console.error("Error connecting to database", e);
  }
}

function main() {
  const app = express();
  const port = process.env.NODE_DOCKER_PORT || 8080;

  connectDb();

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
