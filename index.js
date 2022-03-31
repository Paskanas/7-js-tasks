// function duplicateEncode(word) {
//   let wordArray = word.toLowerCase().split('')

//   let count = []
//   wordArray.forEach(function (i) {
//     count[i] = (count[i] || 0) + 1
//   })

//   let newWord = ''
//   // console.log(count)
//   wordArray.forEach(function (x) {
//     // console.log(count[x])
//     if (count[x] > 1) {
//       newWord = newWord + ')'
//     } else {
//       newWord = newWord + '('
//     }
//   })
//   console.log(newWord)
//   return newWord
// }

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function (a, i, w) {
      console.log(a)
      console.log(i)
      console.log(w)
      console.log(w.indexOf(a))
      console.log(w.lastIndexOf(a))

      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}

duplicateEncode('recede')
