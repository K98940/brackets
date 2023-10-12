module.exports = function check(str, bracketsConfig) {
  const stack = []
  try {
    [...str].forEach((bracket, i) => {
      bracketsConfig.forEach((config) => {
        const openBracket = config[0]
        const closeBracket = config[1]
        const lastInStack = stack.length - 1
        const isCloseBracket = bracket === closeBracket
        const isCorrectOpenBracket = stack[lastInStack] === openBracket
        const isSameBrackets = stack[lastInStack] === closeBracket

        if (bracket === openBracket) {
          if (isSameBrackets) {
            stack.pop()
          } else {
            stack.push(bracket)
          }
        } else if (isCloseBracket) {
          if (stack.length === 0) {
            throw new Error()
          }
          if (isCorrectOpenBracket) {
            stack.pop()
          }
        }

      })
    }
    )
  } catch (error) {
    return false
  }

  return stack.length === 0
}
