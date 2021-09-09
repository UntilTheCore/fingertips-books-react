let id = JSON.parse(localStorage.getItem('idMax') || '0');

class CreateId {
  private readonly id: number = 0;

  constructor() {
    id += 1;
    this.id = id;
    localStorage.setItem('idMax', JSON.stringify(this.id));
  }

  getId() {
    return this.id;
  }
}

export default CreateId;
