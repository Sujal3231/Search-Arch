'use client';

import { useState } from 'react';

type Props = {
  scrollToSection: (id: string) => void;
};

export default function Navbar({ scrollToSection }: Props) {
  const categories = ['Press Release', 'Videos', 'Publications', 'Thoughts & Ideas'];

  // Add state to track the active category
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleClick = (category: string) => {
    const id = category.replace(/\s+/g, '');
    scrollToSection(id);
    setActiveCategory(category); // Set the clicked category as active
  };

  return (
    <div className="d-flex gap-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn cust-mr custom-padding py-1 word-spacing border-0 custom-category-btn ${
            activeCategory === category ? 'active' : ''
          }`}
          onClick={() => handleClick(category)}
        >
          <span className="category-text">{category}</span>
        </button>
      ))}
    </div>
  );
}
