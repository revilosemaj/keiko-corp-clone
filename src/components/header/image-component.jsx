import React from 'react';

export const Image = ({ classNames, src, alt, title }) => {
    return (
        <img 
            className={classNames} 
            src={src} 
            alt={alt} 
            title={title} 
        />
    );
}