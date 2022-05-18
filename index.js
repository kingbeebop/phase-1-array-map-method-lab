const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
/*
const titleCased = () => {
  tutorials = tutorials.map(title => {
      let words = title.split(' ')
      words = words.map(word => {
        word = word.charAt(0).toUpperCase + word.substring(1)
      })
  })
  return tutorials
}
*/

const titleCased = () => {
  let newList = []
  tutorials.map(title => {
    let newTitle = ''
    let words = title.split(' ')
    words = words.map(word => {
      let newWord = word.charAt(0).toUpperCase() + word.substring(1)

      newTitle += ' ' + newWord
    })
    newTitle = newTitle.substring(1)
    //console.log(newTitle)
    newList.push(newTitle)
    //console.log(newList)
})

console.log(newList)
return newList
}