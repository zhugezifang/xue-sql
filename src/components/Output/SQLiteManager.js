import initSqlJs from "sql.js";

class SQLiteManager {
  constructor() {
    this.initDatabase();
  }

  async initDatabase() {
    const SQL = await initSqlJs({ locateFile: file => `./sql-wasm.wasm` });
    this.db = new SQL.Database();
  }

  run(sql, params = []) {
    try {
      const stmt = this.db.prepare(sql);
      if(params.length > 0) {
        stmt.bind(params);
      }
      stmt.step();
      const result = stmt.getAsObject();
      stmt.free();
      return result;
    } catch (error) {
      console.error('Error executing SQL: ', sql, error);
      throw error;
    }
  }

  exec(sql) {
    try {
      this.db.run(sql);
    } catch (error) {
      console.error('Error executing SQL: ', sql, error);
      throw error;
    }
  }

  // Add any other database methods you need...
}

export default new SQLiteManager();
