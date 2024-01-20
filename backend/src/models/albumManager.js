const AbstractManager = require("./AbstractManager");

class albumManager extends AbstractManager {
  constructor() {
    super({ table: "album" });
  }

  // The C of CRUD - Create operation

  async create({ nom_groupe, nom_album, titre_chanson, image}) {
    const [result] = await this.database.query(
      `insert into ${this.table} (nom_groupe, nom_album, titre_chanson,genre, image ) values (?,?,?,?,?)`,
      [nom_groupe, nom_album, titre_chanson,genre, image ]
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

  async update({ id, nom_groupe, nom_album, titre_chanson, image }) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET nom_groupe=?, nom_album=?, titre_chanson=?, genre=?, image=? WHERE id=?`,
      [nom_groupe, nom_album, titre_chanson, genre, image, id]
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


}

module.exports = albumManager;
