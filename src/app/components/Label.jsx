import React from 'react';

const Label = ({ text, color = "bg-blue-500" }) => {
  return (
    <span className={`${color} text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded`}>
      {text}
    </span>
  );
};

export default Label;