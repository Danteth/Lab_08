import React from 'react';
import './Footer.css';



export const Footer = (props) =>{
    const{weather, temp, children} = props;
     let date = new Date();
    return ( 
    <div className='footerDivClass'>
        <h6 className='footerTextClass'>MyWoW © 2022.
        <br/>
        Dzisiaj mamy: {date.toDateString()}
        <br/>
        {children}
        </h6>
        
    </div>
    );
}

