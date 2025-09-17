import Image from 'next/image';
import { WorkItem } from '../Components/Worksdata'; // Import the type from the data file

interface WorksGridProps {
  items: WorkItem[];
}

export default function WorksGrid({ items }: WorksGridProps) {
  if (!items || items.length === 0) {
    return <p className="text-center mt-5">No works to display for this category.</p>;
  }

  return (
    <div className="row portfolio gx-5">
      {items.map((item) => (
        <div key={item.id} className="workinglist col-12 col-md-6 col-lg-4">
          <div className="client-item">
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={320}
              className="img-fluid"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "320px",
              }}
            />
            <div className="client-info">
              <span className="client-title">{item.title}</span>
              <p className="client-location text-muted">{item.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}