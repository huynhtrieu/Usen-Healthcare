class Storage {
  _storage: any;
  
  constructor(storage: any) {
    this._storage = storage;
  }

  get(key: any, defaultValue = null) {
    let value = this._storage.getItem(key) || defaultValue;

    if (value) {
      try {
        value = JSON.parse(value);
      } catch (error) {
        value = defaultValue;
      }
    }

    return value;
  }

  has(key: any) {
    return this.get(key) !== null;
  }

  set(key: any, value: string) {
    value = JSON.stringify(value);

    this._storage.setItem(key, value);
  }

  remove(key: any) {
    this._storage.removeItem(key);
  }

  clear() {
    this._storage.clear();
  }

  pull(key: any, defaultValue: null | undefined) {
    const value = this.get(key, defaultValue);

    this.remove(key);

    return value;
  }
}

const LocalStorage = new Storage(window.localStorage);
const SessionStorage = new Storage(window.sessionStorage);

export default LocalStorage;

export {
  SessionStorage
};
