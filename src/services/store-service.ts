import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable()
export class StoreService {

constructor (private storage: Storage) {}

// JSON "set" example
async setObject(id: string, object: any) {
    await this.storage.set(id, JSON.stringify({ id: id, object: object }));
  }
  
  // JSON "get" example
  async getObject(id: string) {
    return JSON.parse(await this.storage.get(id));
  }
  
  async setItem(id: string, object: any) {
    await this.storage.set(id, object);
  }
  
  async getItem(id: string) {
    return await this.storage.get(id);
  }
  
  async removeItem(id: string) {
    await this.storage.remove(id);
  }
  
  async getKeys() {
    const keys = await this.storage.keys();
    return keys;
  }
  
  async clear() {
    await this.storage.clear();
  }
}
