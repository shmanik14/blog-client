import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Category = () => {
    return (
        <div className="blog-category">
            <div className="container mx-auto grid grid-cols-4 gap-4">
                <div className="sin-category text-center">
                    <p><span><FontAwesomeIcon icon={faUser} /></span></p>
                    <h3>Category</h3>
                </div>
                <div className="sin-category">
                    <p><span><FontAwesomeIcon icon={faUser} /></span></p>
                    <h3>Category</h3>
                </div>
                <div className="sin-category">
                    <p><span><FontAwesomeIcon icon={faUser} /></span></p>
                    <h3>Category</h3>
                </div>
                <div className="sin-category">
                    <p><span><FontAwesomeIcon icon={faUser} /></span></p>
                    <h3>Category</h3>
                </div>
            </div>
        </div>
    );
};

export default Category;