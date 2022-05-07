const {Sequelize} = require('sequelize')

//LOCAL CONNECTION
// const sequelize = new Sequelize('conduit','root','root',{
//     dialect: 'mysql',
//     host:'localhost',
//     port: 8889,
//     logging: false
// });


//AMAZON RDS CONNECTION
/* const sequelize = new Sequelize('conduit1',process.env.USER_NAME,process.env.PASSWORD,{
    dialect: 'mysql',
    host:process.env.DB_HOST,
    logging: false,
    port: 3306
});
 */

// CHANGE IF PROD
const sequelize = new Sequelize('d6rk5ijgmvcf6q','postgres','mySecretDB_p@ss1',{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    logging: false,
    port: 5432,
})

const checkConnection =async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()

module.exports = sequelize