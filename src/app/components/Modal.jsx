import React, { useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import ShowcaseImage from './ShowcaseImage';
import Label from './Label';
import Button from './Button';
import ProjectLinks from './ProjectLinks';

const Modal = ({ isOpen, onClose, title, content, image, labels, buttons, projectLinks }) => {
  const handleEscapeKey = useCallback((event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscapeKey]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-3xl mx-auto">
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full p-1"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(100vh-2rem)]">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
          {image && (
            <div className="mb-6">
              <ShowcaseImage src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
            </div>
          )}
          <div className="mb-4 flex flex-wrap gap-2">
            {labels && labels.map((label, index) => (
              <Label key={index} text={label.text} color={label.color} />
            ))}
          </div>
          <div className="text-gray-700 mb-2 prose max-w-none">{content}</div>
          {projectLinks && <ProjectLinks links={projectLinks} />}
          <div className="flex flex-wrap gap-3 mt-3">
            {buttons && buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                label={button.label}
                icon={button.icon}
                onClick={button.onClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;