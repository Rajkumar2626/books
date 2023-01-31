import React from 'react'

const Book = ({ book, handleBookInfo }) => {
  const { title, author, country, imageLink, language, pages, year } = book

  return (
    <>
      <article
        key={author}
        className='eachbookcss'
        onClick={() => handleBookInfo(author, title, language)}
      >
        <div className='bookImageCrop'>
          <img src={imageLink} alt={author} />
        </div>
        <div className='bookInfo'>
          <h4>Title: {title}</h4>
          <h4>Author: {author}</h4>
          <h4>Language: {language}</h4>
          <h4>Country: {country}</h4>
          <h4>P.No: {pages}</h4>
          <h4>Year: {year}</h4>
        </div>
      </article>
    </>
  )
}

export default Book
