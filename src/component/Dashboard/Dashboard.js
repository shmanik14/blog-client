import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Header></Header>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <ul>
                            <Link to="/addBlog">Add Blog</Link>
                            <Link to="/manageBlog">Manage Blog</Link>
                        </ul>
                    </div>
                    <div className="md:col-span-3">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;