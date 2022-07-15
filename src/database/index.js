const mysql = require("mysql2/promise");

const connectToMysql = async () => {
  if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const config = {
    host: "localhost",
    user: "root",
    password: "senha_root",
    database: "tech_academy",
  };

  const connection = await mysql.createConnection(config);
  console.log("Conexão com o BD MySQL realizada com sucesso!");
  global.connection = connection;

  return connection;
}

connectToMysql();

module.exports = { connectToMysql };
