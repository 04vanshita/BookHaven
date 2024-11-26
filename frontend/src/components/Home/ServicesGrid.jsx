
import React from 'react';
import { FaTruck, FaLock, FaBusinessTime, FaPhoneAlt } from 'react-icons/fa';

const ServicesGrid = () => {
  const services = [
    {
      icon: <FaTruck className='text-yellow-500 text-5xl' />,
      title: 'Pan India Delivery',
      description: 'No Minimum Order Value',
    },
    {
      icon: <FaLock className='text-yellow-500  text-5xl' />,
      title: 'Secure Payment',
      description: '100% Secure Payment',
    },
    { 
      icon: <FaBusinessTime className='text-yellow-500  text-5xl' />,
      title: 'Business/Bulk Orders',
      description: 'Mail Us for Further Orders',
    },
    {
      icon: <FaPhoneAlt className='text-yellow-500  text-5xl' />,
      title: 'Quick Support',
      description: '10:00 AM - 5:00 PM (Sunday Closed)',
    },
  ];

  return (
    <div className='bg-gray-900 py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300'
          >
            {service.icon}
            <h3 className='mt-4 text-xl font-semibold text-yellow-800'>{service.title}</h3>
            <p className='mt-2 text-yellow-100'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
