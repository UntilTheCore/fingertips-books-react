let id = 0;

class CreateId {
  private readonly id: number = 0;

  constructor() {
    id += 1;
    this.id = id;
  }

  getId() {
    return this.id;
  }
}

export default CreateId;
