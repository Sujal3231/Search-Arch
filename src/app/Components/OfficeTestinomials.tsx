'use client';

export default function Testimonials() {
  return (
    <div>


      <div className="mt-5 row">
        <div className=" row">
          <div className="col-md-12">
            <h4 className="h4-Title justify-content-start">Testimonials</h4>
          </div>
        </div>
        <div className="py-5 container">

          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11 col-12">
              <div className="row align-items-center">
                <div className="col-12 ">

                  <div id="carouselExample" className="carousel slide text-center">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="testimonial-content text-center">
                          <div className="testimonial-author mb-3">
                            <h5 className="Content mb-3">Alok Tandon -
                              <span className="author-title">CEO, INOX</span>
                            </h5>
                          </div>
                          <p className="testimonial-text mt-3">
                            "INOX has been associated with Studio for Environment and Architecture and Mr. Kapil Bhalla since many years. They have designed some of our properties across India and also our corporate office in Mumbai. Their impeccable design and their adherence to perfection is highly noteworthy. I would like to wish them the very best in all their future projects and initiatives."
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-content text-center">
                          <div className="testimonial-author mb-3">
                            <h5 className="Content mb-3">Kulmeet Singh Chhabra & Jameet Singh Chhabra-
                              <span className="author-title">Kulmeet Singh Chhabra & Jameet Singh Chhabra</span>
                            </h5>
                          </div>
                          <p className="testimonial-text mt-3">
                            "We initially became interested in Kapil and Jayashree’s work when we saw a home in 2002 that they had done in Jalgoan. After looking at other projects that Studio for Environment and Architecture had created we knew that we were interested in meeting with Kapil and Jayashree to determine if we would be working the on designing our bungalow in Bhusawal. From the very first moment that we met Kapil and his team we knew that our search was over. Kapil and Jayashree are extremely talented and has many years of experience. I can’t imagine meeting anyone who is easier to work with than Kapil and Jayashree. They brought our ideas to life and along with their team created the house that we only imagined in our minds.

                            Then again in 2014 we decided to do our new apartments interior in Pune, the first tram we could imagine was Studio for Environment and Architecture and now they are on the job for the same."
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-content text-center">
                          <div className="testimonial-author mb-3">
                            <h5 className="Content mb-3">Krsnaa Mehta -
                              <span className="author-title">Krsnaa Mehta Design Art</span>
                            </h5>
                          </div>
                          <p className="testimonial-text mt-3">
                            "I have worked with Se-Arch and Kapil and Jayashree Bhalla on a number of projects and it is always an amazing experience. The team is highly motivated and committed with a superb aesthetic design style coupled with immaculate project execution. Their micro attention to detail as well as design and architecture application while always keeping the bigger picture in mind is phenomenal. Their reputation precedes them and I will definitely recommend their services!"
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-content text-center">
                          <div className="testimonial-author mb-3">
                            <h5 className="Content mb-3">Deepak Tiwari -
                              <span className="author-title">CEO,MSC Agency</span>
                            </h5>
                          </div>
                          <p className="testimonial-text mt-3">
                            "Se-arch, has been associated with our company since 2001 and has completed for us a number of office projects all over the World.I commend their astute project management skills which have rendered completion as per schedule with precision and quality always.

                            Kapil & Jayashree have a very deep and evolved aesthetic sense which has been amply depicted in the interiors and structure of each one of our offices. Kapil and his team at Se-Arch, undertook the architecture, layout, construction supervision and project management of MSC House. This project was completed as per schedule and is a landmark office building in the area.

                            We are extremely pleased with our association with Se-arch."
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="testimonial-content text-center">
                          <div className="testimonial-author mb-3">
                            <h5 className="Content mb-3">Harshavardhan Neotia -
                              <span className="author-title">Chairman, AmbujaNeotia Group</span>
                            </h5>
                          </div>
                          <p className="testimonial-text mt-3">
                            "The famous American architect Frank Lloyd Wright had once very pertinently said – “All architectural values are human values, else not valuable.”

                            Incidentally, I am told, Mr. Wright’s work and philosophy had played an important role in shaping Kapil’s creative mind-space.

                            Kapil & Jayashree and their organization have been associated with our different projects for over two decades. Starting with Designing interiors for some of our properties, they went on to design our shopping complex – City Centre New Town along with a five-star hotel and the residential complex Ujjwala in the vicinity. Two of our upcoming projects _ The Chia Kutir – A luxury resort in Makaibari, Kurseong and Utalika – The Condoville – a housing project in Kolkata are also being designed by his firm.

                            In my dealing with Kapil, I have always felt that his vision of architectural development has drawn its inspiration from Mr. Wright’s ethos that “Buildings, too, are children of Earth and Sun” – a mantra that I had imbibed very early in life as a child while helping my mother in her gardening. Our mutual fascination for nature in urban living finds us in an immediate connect also with each other. Kapil’s taste for aesthetics, eye for detailing and promptness to feedback has made him the perfectionist that he is today. I wish them and their organization all the very best for the future."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Prev button */}
                    <button
                      className="carousel-control-prev custom-control"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="prev"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#0d6efd"
                        viewBox="0 0 24 24"
                        className="arrow-icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                        />
                      </svg>
                      <span className="visually-hidden">Previous</span>
                    </button>

                    {/* Next button */}
                    <button
                      className="carousel-control-next custom-control"
                      type="button"
                      data-bs-target="#carouselExample"
                      data-bs-slide="next"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#0d6efd"
                        viewBox="0 0 24 24"
                        className="arrow-icon"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                        />
                      </svg>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}