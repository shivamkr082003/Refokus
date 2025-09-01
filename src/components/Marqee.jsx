import React from 'react';

function Marqee({ imageurls = [] }) {   // default empty array diya
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      {imageurls.map((url, index) => (
        <img
          key={`img1-${index}`}   // unique key
          src={url}
          alt=""
          className="w-6vw flex-shrink-0"
        />
      ))}

      {imageurls.map((url, index) => (
        <img
          key={`img2-${index}`}   // dusri list ke liye bhi unique key
          src={url}
          alt=""
          className="flex-shrink-0"
        />
      ))}
    </div>
  );
}

export default Marqee;
