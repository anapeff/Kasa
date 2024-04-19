import React from 'react';
import { Link } from 'react-router-dom';
import './_error.scss';

function Error() {
  return (
    
    <div>
     

      <section className='error'>

        <h1 className="error_title">404</h1>
        <p className="error_txt">Oups! La page que vous demandez n'existe pas.</p>
        <Link className='error_link_redirection' to="/">Retourner sur la page d’accueil</Link>
        
        </section>

    </div>
  );
}

export default Error;