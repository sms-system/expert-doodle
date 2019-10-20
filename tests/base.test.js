const check = require('../index')

test('correct', () => {
  expect(check('[]{abc}()')).toBeTruthy()
  expect(check('(){[[[]]]}')).toBeTruthy()
})

test('incorrect', () => {
  expect(check('([)]')).toBeFalsy()
  expect(check('{}}')).toBeFalsy()
  expect(check('(')).toBeFalsy()
})