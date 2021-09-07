import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  // RegExp para testar se começa com letra maiúscula ou minúscula
  private validId = /^[A-Za-z]/;

  constructor() {}

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty!');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }
}
