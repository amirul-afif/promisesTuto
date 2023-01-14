// Async programming

// ASYNC / AWAIT

// You order something at restaurant
// Meanwhile, you talk with friend while waiting
// RESOLVED - The waiter bring the food to the table
// REJECTED - No food due to kitchen broke down


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    isReady = [true, false][Math.floor(Math.random() * 2)]
    isReady ? resolve('Soup is ready') : reject('No soup today')
  }, 3000)
})


// console.log(
//   promise1
//     .then(success => console.log({ success }))
//     .catch(error => console.log({ error }))
// )





// RESOLVED - if waiter brings soup
// tip the waiter
// you pay for soup

// REJECTED - leave bad review, no tip

const getSoup = async () => {
  const data = { rating: 0, tip: 0, pay: 0, review: 0 }

  try {
    const soup = await promise1
    console.log(soup)
    data.rating = 5
    data.tip = .2
    data.pay = 10
    data.review = 5
    return data
  } catch (error) {
    console.log(error)
    data.rating = 1
    data.tip = 0
    data.pay = 0
    data.review = 1
    return data
  }
}

getSoup().then(value => console.log(value))





// API call

console.log('fetch',
  fetch('https://dog.ceo/api/breeds/image/random') // promise
    .then(response => response.json()) // promise
    .then(data => console.log(data)) // actual data
)

// Rules ASYNC AWAIT
// 1. You must create a function ()
// 2. You must use keyword async & await
// await : promise

const getDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
}

getDog()