class Database {
  static instance: Database
  private name: string

  constructor (name?: string) {
    if (Database.instance) return Database.instance

    Database.instance = this
    this.name = name
  }

  get getName() {
    return this.name
  }
}

export default Database