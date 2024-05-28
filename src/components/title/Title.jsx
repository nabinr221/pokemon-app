import React from 'react';

const Title = ({ title, className = '' }) => {
  return (
    <div className={`bg-blue-50 shadow-sm py-3 px-5 ${className}`}>
      <h1 className="font-bold capitalize">{title}</h1>
    </div>
  );
};

export default Title;
