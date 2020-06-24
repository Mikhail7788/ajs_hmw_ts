import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test("price calculated",() => {
  
  const cart = new Cart();

  const avengers = new Movie(1, "Avengers", 2012, 100, 124, "Avengers assemble", "USA", "action");
  const titanic = new Movie(2, "Titanic", 1997, 500, 180, "Nothing on Earth can separate them", "USA", "drama");
  const spartacus = new Movie(3, "Spartacus", 2012, 605, 160, "Some legends are written in blood", "USA", "history drama");
  
  cart.add(titanic);
  cart.add(avengers);
  cart.add(spartacus);

  expect(cart.price()).toBe(1205);

})

test("price calculated with discount",() => {
  
  const cart = new Cart();

  const avengers = new Movie(1, "Avengers", 2012, 100, 124, "Avengers assemble", "USA", "action");
  const titanic = new Movie(2, "Titanic", 1997, 500, 180, "Nothing on Earth can separate them", "USA", "drama");
  const spartacus = new Movie(3, "Spartacus", 2012, 605, 160, "Some legends are written in blood", "USA", "history drama");
  
  cart.add(titanic);
  cart.add(avengers);
  cart.add(spartacus);

  expect(cart.discontPrice(50)).toBe(603);

})

test("movie deleted from cart",() => {
  
  const cart = new Cart();

  const avengers = new Movie(1, "Avengers", 2012, 100, 124, "Avengers assemble", "USA", "action");
  const titanic = new Movie(2, "Titanic", 1997, 500, 180, "Nothing on Earth can separate them", "USA", "drama");
  const spartacus = new Movie(3, "Spartacus", 2012, 605, 160, "Some legends are written in blood", "USA", "history drama");
  
  cart.add(titanic);
  cart.add(avengers);
  cart.add(spartacus);
  
  cart.removeFromCart(1);
  expect(cart.items).toEqual([titanic, spartacus]);

})