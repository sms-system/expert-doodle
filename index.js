const bracketsPairs = {
  '{': '}',
  '(': ')',
  '[': ']'
}

module.exports = (str) => {
  const stack = []
  for (let i=0; i<str.length; i++) {
    const char = str[i]
    const isOpeningBracket = Object.keys(bracketsPairs).includes(char)
    const isClosingBracket = !isOpeningBracket && Object.values(bracketsPairs).includes(char)

    if (isOpeningBracket) { stack.push(char) }
    else if (isClosingBracket && (
      !stack.length ||
      char !== bracketsPairs[stack.pop()]
    )) { return false }
  }
  return !stack.length
}