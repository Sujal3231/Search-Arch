'use client';

import Image from 'next/image';

// NOTE: Make sure the paths to your images are correct.
// These are placeholder paths based on your original component.
import Press1 from '../assets/Images/Work/press1.webp';
import Press2 from '../assets/Images/Work/press2.webp';
import Press3 from '../assets/Images/Work/press3.webp';
import Press4 from '../assets/Images/Work/press4.webp';
import Press5 from '../assets/Images/Work/press5.webp';

export default function PressRelease() {
  // Data for the press release items.
  const pressItems = [
    {
      id: 1,
      content: 'Sky Project and M House Awarded by SARA NY as Modern Architecture of India.',
      date: '22 Feb, 2024',
      image: Press1,
    },
    {
      id: 2,
      content: 'Sky Project and M House Awarded by SARA NY as Modern Architecture of India.',
      date: '22 Feb, 2024',
      image: Press2,
    },
    {
      id: 3,
      content: 'Sky Project and M House Awarded by SARA NY as Modern Architecture of India.',
      date: '22 Feb, 2024',
      image: Press3,
    },
    {
      id: 4,
      content: 'Sky Project and M House Awarded by SARA NY as Modern Architecture of India.',
      date: '22 Feb, 2024',
      image: Press4,
    },
    {
      id: 5,
      content: 'Sky Project and M House Awarded by SARA NY as Modern Architecture of India.',
      date: '22 Feb, 2024',
      image: Press5,
    },
  ];

  return (
    // Root container matching the provided HTML structure.
    <div className="gx-0 mt-5 row">
      
      {/* --- LEFT COLUMN (Main Content) --- */}
      <div id="PressRelease" className="scroll-section col-lg-9">
        <p className="news-latest-press-release-videos">Latest Press Release</p>

        {/* Main news item */}
        <figure className="news-figure figure">
          <Image
            alt="Main News"
            src={pressItems[0].image}
            width={800} // Width is required by Next.js Image
            height={450} // Height is required by Next.js Image
            className="news-figure-img figure-img img-fluid"
          />
          <figcaption className="news-figure-caption figure-caption">
            {pressItems[0].content}
            <br />
            <br />
            <h6>{pressItems[0].date}</h6>
          </figcaption>
        </figure>

        {/* Two smaller news items in a grid */}
        <div className="row custom-news-row">
          <div className="news-col-center p-0 col-lg-6 col-md-12">
            <figure className="news-figures-container figure">
              <Image
                alt="News"
                src={pressItems[1].image}
                width={400}
                height={250}
                className="news-figure-img2 news-img-section-2 figure-img img-fluid"
              />
              <figcaption className="news-fig-f-z figure-caption">
                {pressItems[1].content}
                <h6 className="pt-5">{pressItems[1].date}</h6>
              </figcaption>
            </figure>
          </div>
          <div className="news-col-center p-0 col-lg-6 col-md-12">
            <figure className="news-figures-container2 figure">
              <Image
                alt="News"
                src={pressItems[2].image}
                width={400}
                height={250}
                className="news-figure-img2 news-img-section-2 figure-img img-fluid"
              />
              <figcaption className="news-fig-f-z figure-caption">
                {pressItems[2].content}
                <h6 className="pt-5">{pressItems[2].date}</h6>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Divider line */}
        <hr className="news-hr-line" />
      </div>

      {/* --- RIGHT COLUMN (Sidebar) --- */}
      <div className="news-sidebar-div d-none d-lg-block col-3">
        <p className="news-subscribe-to-news-letters">Subscribe to Newsletter</p>
        <form>
          <div className="subscribe-input-group input-group">
            <input
              placeholder="Enter your email"
              aria-label="Subscribe"
              aria-describedby="basic-addon2"
              className="form-control"
              defaultValue="" // Using defaultValue for uncontrolled input
            />
            <button type="button" id="basic-addon2" className="subscribe-button btn btn-primary">
              Subscribe
            </button>
          </div>
        </form>

        {/* Sidebar updates section */}
        <div className="mt-4">
          <p className="news-sidebar-updates">Updates</p>
          
          {/* Mapping over the remaining items for the updates section */}
          {pressItems.slice(3, 5).map((item) => (
            <figure className="news-figure3 figure" key={item.id}>
              <Image
                alt="News Update"
                src={item.image}
                width={400}
                height={250}
                className="news-figure-img3 figure-img img-fluid"
              />
              <figcaption className="news-figure-caption3 figure-caption">
                {item.content}
                <br />
                <br />
                <h6>{item.date}</h6>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
