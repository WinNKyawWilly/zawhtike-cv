import React from 'react';

const Button = ({ href, label, icon: Icon, onClick }) => {
  const ButtonComponent = href ? 'a' : 'button';
  const buttonProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <ButtonComponent
      {...buttonProps}
      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <span>{label}</span>
      {Icon && <Icon className="h-4 w-4 ml-2" />}
    </ButtonComponent>
  );
};

export default Button;