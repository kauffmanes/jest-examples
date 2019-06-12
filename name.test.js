import { setNickname } from './name';

const obj = {
  name: 'George'
}

test('nickname should be henry', () => {
  expect(setNickname(obj).nickname).toBe('Henry')
})