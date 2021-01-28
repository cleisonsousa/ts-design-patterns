class Database {
  static instance: Database
  private name: string

  constructor(name?: string) {
    this.name = name
  }

  static getInstance(name?: string) {
    if (!Database.instance) {
      Database.instance = new Database(name)
    }

    return Database.instance
  }

  get getName() {
    return this.name
  }
}

export default Database