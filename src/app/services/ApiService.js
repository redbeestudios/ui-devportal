import mysql from 'mysql';

class ApiService {
  constructor() {

    this.connection = mysql.createPool({
      connectionLimit: 10,
      host     : process.env.DB_HOST,
      user     : process.env.DB_USERNAME,
      password : process.env.DB_PASSWORD,
      database : process.env.DB_NAME
    });

    // the class constructor
    if(! ApiService.instance){
      ApiService.instance = this;
    }
    return ApiService.instance;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT * FROM apis AS specs;', (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  findById(id) {
    return new Promise((resolve, reject) => {
      this.connection.query(`SELECT * FROM apis AS specs WHERE specs.id = ${id};`, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    })
  }
}

const instance = new ApiService();
// prevents new properties from being added to the object
Object.freeze(instance);
export default instance;
