import dotenv from 'dotenv';
dotenv.config();

import app from "./app.js";
import { sequelize } from "./persintence/database/database.js";

async function main() {
  await sequelize.sync({ force: false });

  const ip = process.env.IP || 'localhost';
  const port = process.env.PORT || 4000;

  app.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
  });
}

main();
