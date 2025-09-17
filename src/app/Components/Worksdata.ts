import { StaticImageData } from 'next/image';

// Import your images
import feature1 from '../assets/Images/Work/Feature1.webp';
import feature2 from '../assets/Images/Work/Feature2.webp';
import feature3 from '../assets/Images/Work/Feature3.webp';
import feature4 from '../assets/Images/Work/Feature4.webp';
import feature5 from '../assets/Images/Work/Feature5.webp';
import feature6 from '../assets/Images/Work/Feature6.webp';

// Define the shape of a single work item for type safety
export interface WorkItem {
  id: number;
  title: string;
  location: string;
  image: StaticImageData;
}

// Export the data object itself
export const worksData = {
  categories: [
    'Featured', 'Hospitality', 'Homes', 'Institutions',
    'Workplaces', 'Master Planning', 'Mixed Use', 'Exhibits'
  ],
  items: {
    'Featured': [

      { id: 1, title: 'Taj City Center', location: 'Kurseong, Darjeeling', image: feature1 },

      { id: 2, title: 'Luxury Resort', location: 'Goa', image: feature2 },

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature3 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature4 },

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 }

    ],

    'Hospitality': [

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature3 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature4 },

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 },

      { id: 1, title: 'Taj City Center', location: 'Kurseong, Darjeeling', image: feature1 },

      { id: 2, title: 'Luxury Resort', location: 'Goa', image: feature2 }

    ],

    'Homes': [

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 },

      { id: 1, title: 'Taj City Center', location: 'Kurseong, Darjeeling', image: feature1 },

      { id: 2, title: 'Luxury Resort', location: 'Goa', image: feature2 },

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature3 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature4 },

    ],

    'Institutions': [

      { id: 1, title: 'Taj City Center', location: 'Kurseong, Darjeeling', image: feature1 },

      { id: 2, title: 'Luxury Resort', location: 'Goa', image: feature2 },

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature3 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature4 },

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 },

    ],

    'Workplaces': [

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature3 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature4 },

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 },

      { id: 1, title: 'Taj City Center', location: 'Kurseong, Darjeeling', image: feature1 },

      { id: 2, title: 'Luxury Resort', location: 'Goa', image: feature2 }

    ],

    'Master Planning': [

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature5 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature6 },
      



    ],

    'Mixed Use': [

      { id: 3, title: 'Grand Hotel', location: 'Mumbai', image: feature1 },

      { id: 4, title: 'Beach Resort', location: 'Goa', image: feature2 }

    ],

    'Exhibits': [

      { id: 5, title: 'Modern Villa', location: 'Bangalore', image: feature3 },

      { id: 6, title: 'Heritage Bungalow', location: 'Pune', image: feature4 }

    ],

  }
};