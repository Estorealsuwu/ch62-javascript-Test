const UserController = require('./user-controller');

describe('UserController', () => {
  let controller;
  let user1;
  let user2;

  beforeEach(() => {
    controller = new UserController();
    user1 = { id: 1, email: 'user1@test.com' };
    user2 = { id: 2, email: 'user2@test.com' };

    controller.add(user1);
  });

  // ✅ add() - usuario que NO está en la lista
  test('add() agrega un usuario que no existe', () => {
    controller.add(user2);
    expect(controller.getUsers().length).toBe(2);
  });

  // ✅ remove() - usuario que NO está en la lista
  test('remove() no elimina nada si el usuario no existe', () => {
    controller.remove(user2);
    expect(controller.getUsers().length).toBe(1);
  });

  // ✅ findByEmail() - caso positivo
  test('findByEmail() encuentra un usuario existente', () => {
    const result = controller.findByEmail('user1@test.com');
    expect(result).toBe(user1);
  });

  // ✅ findByEmail() - caso negativo
  test('findByEmail() retorna undefined si no existe', () => {
    const result = controller.findByEmail('no@test.com');
    expect(result).toBeUndefined();
  });

  // ✅ findById() - caso positivo
  test('findById() encuentra un usuario por id', () => {
    const result = controller.findById(1);
    expect(result).toBe(user1);
  });

  // ✅ findById() - caso negativo
  test('findById() retorna undefined si no existe', () => {
    const result = controller.findById(99);
    expect(result).toBeUndefined();
  });
});
