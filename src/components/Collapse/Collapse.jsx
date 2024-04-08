import React, { useState } from 'react';
import './_collapse.scss';
import arrowUp from '../../images/Arrow-up.png';
import arrowDown from '../../images/Arrow-down.png';


function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
   
    <div className="collapse">
        
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>
        <img src={isOpen ? arrowUp : arrowDown} alt={isOpen ? 'up' : 'down'} />
      </div>
      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;