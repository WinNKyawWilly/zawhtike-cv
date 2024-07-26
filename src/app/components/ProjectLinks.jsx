import React from 'react';
import { LinkIcon } from 'lucide-react';

const ProjectLinks = ({ links }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold mb-2">Project Links</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="flex items-center">
            <LinkIcon className="h-4 w-4 mr-2 text-blue-500" />
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;