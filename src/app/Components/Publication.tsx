'use client';

import Image from 'next/image';
import Book1 from '../assets/Images/Work/book1.webp';
import Book2 from '../assets/Images/Work/book2.webp';
import Book3 from '../assets/Images/Work/book3.webp';
import Book4 from '../assets/Images/Work/book4.webp';
import Book5 from '../assets/Images/Work/book5.webp';
import Book6 from '../assets/Images/Work/book6.webp';

export default function Publications() {
  const books = [
    { id: 1, title: 'Book 1', desc: 'Description for Book 1', img: Book1 },
    { id: 2, title: 'Book 2', desc: 'Description for Book 2', img: Book2 },
    { id: 3, title: 'Book 3', desc: 'Description for Book 3', img: Book3 },
    { id: 4, title: 'Book 4', desc: 'Description for Book 4', img: Book4 },
    { id: 5, title: 'Book 5', desc: 'Description for Book 5', img: Book5 },
    { id: 6, title: 'Book 6', desc: 'Description for Book 6', img: Book6 },
    // NOTE: These items have duplicate IDs, which will be fixed in the .map() below
    { id: 1, title: 'Book 1', desc: 'Description for Book 1', img: Book1 },
    { id: 2, title: 'Book 2', desc: 'Description for Book 2', img: Book2 },
    { id: 3, 'title': 'Book 3', desc: 'Description for Book 3', img: Book3 },
    { id: 4, title: 'Book 4', desc: 'Description for Book 4', img: Book4 }
  ];

  const scrollToCard = (id: number) => {
    const el = document.getElementById(`book-${id}`);
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start' });
  };

  return (
    <section id="Publications" className="scroll-section mb-5 px-0">
      <h3 className="title-news mb-5 text-center">Publications</h3>
      <div className="row">
        <div className="col-md-12">

          {/* Horizontal Scroll */}
          <div
            // UPDATED: Added the 'publications-scroller' class
            className="d-flex overflow-auto pb-3 publications-scroller"
            style={{ scrollBehavior: 'smooth', gap: '5rem' }}
          >
            {books.map((book, index) => (
              <div
                key={`${book.id}-${index}`}
                id={`book-${book.id}-${index}`}
                className="flex-shrink-0"
                style={{ minWidth: '300px', height: '510px', overflow: 'hidden' }}
              >
                <div style={{ height: '430px', position: 'relative' }}>
                  <Image
                    src={book.img}
                    alt={book.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="300px"
                  />
                </div>
                <div className="p-3">
                  <h5>{book.title}</h5>
                  <p className="mb-0">{book.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}