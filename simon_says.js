module.exports = {echo, shout, repeat, startOfWord, firstWord };

function echo (word){
  return `${word}`
}

function shout (word) {
let wordUpcase = word.toUpperCase()
return `${wordUpcase}`
}


function repeat (word, number) {
  output = []
  for (i=0; i < number; i++){
    output.push(word)
  }
  return output.join(' ')
 }



function startOfWord(word, number){
  return word.slice(0, number)
}


function firstWord(text) {
  let a = text.split(" ")
  return a[0]
}
