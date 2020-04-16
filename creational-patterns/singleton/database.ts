class Database {
  public static instance: Database

  constructor () { }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance
  }
}

export default Database