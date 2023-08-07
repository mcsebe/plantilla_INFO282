import Sequelize from "sequelize";
import dotenv from 'dotenv'

export const sequelize = new Sequelize(
  "test",
  "root",
  "1306",
  
  {
    host: "localhost",
    dialect: "mariadb",
  }
);

// export const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
  
//   {
//     host: process.env.DB_HOST,
//     dialect: "mariadb",
//   }
// );
