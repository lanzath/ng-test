import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  // Antes de cada it(), será instanciada um novo UniqueIdService().
  beforeEach(() => {
    service = new UniqueIdService();
  });

  // Cada critério de teste é definido numa função it()
  // # é uma convenção para indicar que o que será testado é um método.
  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should generate id when called with prefix`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');

    // expect vai verificar se o id começa 'app-'.
    expect(id.startsWith('app-')).toBeTrue();

    // expect(true).toBeTrue() // Ok pois espera que o que será testado seja um true literal;
    // expect(new Boolean(true)).toBeTrue() // Erro pois não se trata de um true literal;

    // expect(true).toBe(true); // Compara se um valor literal é igual ao outro.
    // expect().toBeTruthy(); // É resolvido pelo runtime do JS de acordo com o que devolve false ou true.
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should not generate duplicate IDs when called multiple times.`, () => {
    // Set (conjunto) não permite valores duplicados.
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    // Se a quantidade de elementos do conjunto for menor que 50,
    // então foi gerado um id duplicado que não foi inserido no conjunto.
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should return the number of generated ids when called`, () => {
    service.generatedUniqueIdWithPrefix('app');
    service.generatedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generatedUniqueIdWithPrefix.name}
    should throw when called with empty`, () => {
    const invalidValues = [null, undefined, '', '0', '1'];
    invalidValues.forEach((invalidValue) => {
      // Para testar se um método está lançando corretamente uma exceção, este deve ser chamado dentro de uma função.
      expect(() => service.generatedUniqueIdWithPrefix(invalidValue))
        .withContext(`Invalid value: ${invalidValue}`) // Se falhar, irá mostrar qual o valor que falhou o teste.
        .toThrow();
    });
  });
});
