import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const FeaturedBlog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/blogs`)
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="featured-blog">
            <div className="container mx-auto">
                    <h2 className="section-heading">Featured Blog</h2>
                    <div className="grid grid-cols-3 gap-1">
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)  
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedBlog;