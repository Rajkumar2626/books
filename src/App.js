import React, { useState } from 'react'
import Book from './Book'
import data from './data'

function App() {
  const [books, setbooks] = useState(data)

  const handleBookInfo = (author, title, language) => {
    let bookinformation = books.filter((item) => item.author !== author)
    alert(`Author:${author} \n Title:${title} \n Language:${language} `)
  }
  return (
    <>
      <section>
        <div className='title'>
          <h2>Best Seller Books</h2>
          <div className='underline'></div>
        </div>
        <div className='bookListinfo'>
          {books.map((book) => {
            return (
              <Book
                key={book.title}
                book={book}
                handleBookInfo={handleBookInfo}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default App
