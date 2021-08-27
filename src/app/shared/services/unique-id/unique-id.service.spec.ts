import { TestBed } from '@angular/core/testing';

import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  // Cada critério de teste é definido numa função it()
  // # é uma convenção para indicar que o que será testado é um método.
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const service = new UniqueIdService();
    const id = service.generatedUniqueIdWithPrefix('app');

    // expect vai verificar se o id começa 'app-'.
    expect(id.startsWith('app-')).toBeTrue();
  });
});
