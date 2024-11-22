import React from 'react';

const MessageChat = () => {
  const currentDate = new Date().toLocaleDateString(); 

  const images = [
    'https://randomuser.me/api/portraits/men/1.jpg', 
    'https://randomuser.me/api/portraits/women/1.jpg', 
    'https://randomuser.me/api/portraits/men/2.jpg', 
    'https://randomuser.me/api/portraits/women/2.jpg', 
  ];

  return (
    <div className="p-4 for_responsive" style={{ marginLeft: '12rem' }}>
      {[
        { name: 'Raaj', color: 'blue', initial: 'R' },
        { name: 'Raman', color: 'green', initial: 'R' },
        { name: 'Rahul', color: 'purple', initial: 'R' },
        { name: 'Kamal', color: 'red', initial: 'K' },
        { name: 'Suresh', color: 'orange', initial: 'S' },
        { name: 'Ravi', color: 'yellow', initial: 'R' },
      ].map((contact, index) => {
        const randomImage = images[Math.floor(Math.random() * images.length)];

        return (
          <div
            key={index}
            className='bg-white h-16 w-full mb-3 rounded-lg shadow-lg hover:bg-emerald-950 hover:text-white transition-colors'
          >
            <div className='flex items-center p-2 hover:text-white'>
            
              <div
                className={`w-10 h-10 rounded-full bg-${contact.color}-500 flex justify-center items-center mr-4 hover:text-white`}
              >
                <img
                  src={randomImage}
                  alt={`${contact.name}'s profile`}
                  className='w-full h-full rounded-full object-cover hover:text-white'
                />
              </div>
              <div className='flex-1 text-lg font-semibold text-gray-800 hover:text-white'>
                {contact.name}
              </div>
              <div className='text-sm text-gray-500 mr-10 hover:text-white'>
                {currentDate}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageChat;
