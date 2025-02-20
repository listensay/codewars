// 编写一个函数，该函数接收一个包含一个或多个单词的字符串，并返回相同的字符串，但长度为五个或更多字母的所有单词需要反转（正如这个Kata的名字一样）。
// 传入的字符串只会包含字母和空格。只有在有多个单词时才会包含空格。

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(str: string){
  const strTem = str.split(' ')
  const copyStr = strTem
  strTem.forEach((item, index) => {
    if(item.length >= 5) {
      copyStr[index] = item.split('').reverse().join('')
    }
  })

  const result = copyStr.join(' ')
  return result
}

console.log(spinWords('This is another tes'))

export {}