'use client';
import { useState } from "react";

export default function Accolades() {
  const [expanded, setExpanded] = useState(false);

  const accolades = [
    { title: "Design Excellence in Architecture and Interior Design", content: "Society Interiors Design Awards - 2014" },
    { title: "Second prize for all India design competition - 1995", content: "Indian Institute of Technology, Guwahati, Asam Master Plan" },
    { title: "National Winner in design Coffee Shop & Bar/Pub categories", content: "Hotel & Food Service Design Award - 2014" },
    { title: "Design competition held in Orlando, Florida - 1985", content: "American Society for Landscape Architecture - Merit Award" },
    { title: "For excellence in Hospitality Design", content: "Indian Institute of Interior Designers Awards 1990" },
    { title: "Second price for all India design competition - 1985", content: "International Federation of Landscape Architects (Ifla)" },
    { title: "25 Masters of Indian Architecture", content: "2011 Book by ITP Publishing India Ltd" },
    { title: "Landscape Enduring Outdoors", content: "July 2002 - Construction World" },
    { title: "Interior Excellence Award", content: "May 2009 - Lokmat" },
    { title: "Bombay Gas Company Office", content: "September 1991 - Indian Architect & Builder" },
    { title: "Big Is Beautiful", content: "December 2004 - Design & Interiors" },
    { title: "Happenings", content: "May 2009 - Society Interiors" },
    { title: "The Bombay Gas Company", content: "January 1992 - Inside Outside" },
    { title: "Professional Perspective", content: "November 2004 - Construction World" },
    { title: "A Story of Design - Residence & Lokmat", content: "October 2009 Home Review" },
    { title: "Restoring the Old and Beatiful", content: "March 1995 - The Fountainhead" },
    { title: "Saurav's", content: "April 2005 - Indian Architects & Builders" },
    { title: "The Art of Precision", content: "May 2010 - Better Interior" },
    { title: "Orchestrating Space", content: "April 1997 - Inside Outside" },
    { title: "In the middle ground...of nature & industry", content: "May 2005 - Indian Architect & Builders" },
    { title: "Sea and Sand", content: "October 2010 - Inside Outside" },
    { title: "50 Years of Nation Building", content: "August 1997 - Indian Architect and Builder" },
    { title: "Follow the Light", content: "November 2008 - Better Interiors" },
    { title: "Verandah House", content: "November 2010 - Inside Outside" },
    { title: "Hotel Design - Fortified Retreat", content: "December 1998 - Society Interiors" },
    { title: "Night and Day", content: "April 2009 - Hospitality Design" },
    { title: "Striking the Right Balance", content: "June 2012 - Index Furniture Journal" },
    { title: "External Expressions", content: "November 1998 - Indian Architect and Builder" },
    { title: "Budding Design", content: "April 2009 - Society Interiors" },
    { title: "The Mumbai Greenlink Project", content: "December 2013 - Index Furniture Journal" },
    { title: "Different Strokes", content: "November 1998 - Indian Architect and Builder" },
    { title: "Alternate Homes", content: "February 2009 - Index Furniture Journal" },
    { title: "Precise Plans", content: "January 2014 - Society Interiors" },
    { title: "An Ingenuity of Expression", content: "January 2000 - Inside Outside" },
    { title: "Greenlink Mumbai", content: "February 2009 - Lokmat" },
    { title: "A Tale of Two Homes", content: "July 2001 - Inside Outside" },
    { title: "Maximising Design", content: "June 2009 - CW Interiors" },
  ];

  return (
    <div>
      <div className="row mb-4">
        <div className="col-md-12 Desc">
          <div className="justify-content-start mb-4">
            <h4 className="h4-Title">Accolades</h4>
          </div>

          <div className="col-md-12">
            <div
              className="justify-content-center d-block w-100 hide-scrollbar"
              style={{
                maxHeight: expanded ? "800px" : "250px",
                overflowY: "scroll",
                overflowX: "hidden",
                transition: "max-height 0.5s ease",
                paddingRight: "10px",
              }}
            >
              <div className="row">
                {accolades.map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="h-100">
                      <h6 className="Accolades-T mb-2">{item.title}</h6>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 text-start">
              <button 
                className="btn btn-outline-dark"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "View Less" : "View More"}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
