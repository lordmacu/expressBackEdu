require('dotenv').config();
//MYSQL
const  Sequelize = require('sequelize');
//MONGODB
const mongoose = require('mongoose');

const dbMysql = new Sequelize(
    process.env.DB_MYSQL,
    process.env.DB_MYSQL_USER,
    process.env.DB_MYSQL_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    dialectOptions: {
      options: {
        requestTimeout: 12000
      }
    },
    pool: {
      max: 100,
      min: 0,
      acquire: 60000,
    }
//    logging: true
    }
);

const conectionTest = async() => {
   try {
    await dbMysql.authenticate();
    console.log('Connection has been established successfully.', `${process.env.DB_MYSQL} server ${process.env.DB_HOST}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } 
}

const dbMongo = async(log=false)=>{

  try {

      await mongoose.connect(process.env.MONGODB_CNN,{
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex:true,
          useFindAndModify: false
      });
         console.log('\nDatabase online\n');

  } catch (error) {
      console.log(error);
  }

}
 
module.exports = {
  conectionTest,
  dbMongo,
  dbMysql
};

