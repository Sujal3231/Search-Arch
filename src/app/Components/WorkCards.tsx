'use client';

import { useState, useRef } from 'react'; // 1. Import useRef
import { worksData } from '../Components/Worksdata'; // Adjust path if needed
import WorksGrid from './Worksgrid';

export default function WorkCards() {
  const [activeCategory, setActiveCategory] = useState('Featured');
  // 2. Create a ref for the scrolling container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 3. Create a click handler function to manage state and scrolling
  const handleCategoryClick = (category: string, event: React.MouseEvent<HTMLButtonElement>) => {
    // First, update the active category state
    setActiveCategory(category);

    // Now, handle the smooth scroll
    const container = scrollContainerRef.current;
    const button = event.currentTarget;

    if (container && button) {
      // Calculate the position to scroll to. This will center the button.
      const containerHalfWidth = container.offsetWidth / 2;
      const buttonHalfWidth = button.offsetWidth / 2;
      const buttonLeft = button.offsetLeft;

      const scrollPosition = buttonLeft - containerHalfWidth + buttonHalfWidth;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth', // This is what makes it slide!
      });
    }
  };

  return (
    <section className='responsive'>
      <div className="row headwork">
        <div className="headcol col-12 mb-4">
          {/* 4. Attach the ref to the scrolling div */}
          <div
            ref={scrollContainerRef}
            className="d-flex overflow-x-auto"
            style={{ whiteSpace: 'nowrap' }}
          >
            <div className="ms-auto d-flex gap-1">
              {worksData.categories.map((category) => (
                <button
                  key={category}
                  className={`btn px-3 py-1 word-spacing border-0 custom-category-btn ${activeCategory === category ? 'active-cat' : ''}`}
                  // 5. Update onClick to use the new handler
                  onClick={(e) => handleCategoryClick(category, e)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WorksGrid items={worksData.items[activeCategory]} />
    </section>
  );
}