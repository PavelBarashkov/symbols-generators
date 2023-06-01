/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import Team from '../Team';

const Character = [
  {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Воин',
    type: 'Var',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  },
];

test('Team test var', () => {
  const team = new Team(Character);
  const gen = team[Symbol.iterator]();
  const Bowman = gen.next();
  const Var = gen.next().value;
  expect(Character[1]).toEqual(Var);
});

test('test value > team.length', () => {
  const team = new Team(Character);
  const gen = team[Symbol.iterator]();
  const Bowman = gen.next();
  const Var = gen.next().value;
  const result = gen.next().value;
  expect(undefined).toEqual(result);
});
