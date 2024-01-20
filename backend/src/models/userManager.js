const AbstractManager = require("./AbstractManager");

class userManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // The C of CRUD - Create operation

  async create({ pseudo, email, hashed_password, image }) {
    const [result] = await this.database.query(
      `insert into ${this.table} ( pseudo,
        email,
        hashed_password,
        image ) values (?,?,?,?)`,
      [pseudo, email, hashed_password, image]
    );

    return result;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [result] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }

  async readAll() {
    const [result] = await this.database.query(`select * from ${this.table}`);
    return result;
  }

  // The U of CRUD - Update operation

  async update({ id, pseudo, email, image, favorite_artiste, favorite_album }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET pseudo=?, email=?, image=? favorite_artiste=?, favorite_album=?,WHERE id=?`,
      [pseudo, email, image, favorite_artiste, favorite_album, id]
    );
    return result;
  }

  // The D of CRUD - Delete operation

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE from ${this.table} where id = ?`,
      [id]
    );
    return result;
  }
  async getByPseudo(pseudo) {
    const [result] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE pseudo = ?`,
      [pseudo]
    );
    return result;
  }
}

module.exports = userManager;
