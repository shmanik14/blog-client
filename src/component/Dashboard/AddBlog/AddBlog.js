import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form/dist/index.esm.js';
import { userContext } from '../../../App';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const AddBlog = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [imageURL, setImageURL] = useState(null);
    console.log(imageURL)
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ea9e86076a87189ae321024384da284c')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const blogData = {
            title: data.title,
            description: data.description,
            date: new Date().toDateString('dd/MM/yyyy HH:MM:SS'),
            image: imageURL
        }
        const url = `https://desolate-meadow-15734.herokuapp.com/addBlog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogData)
        })
        .then(res => {
            console.log('server');
            alert('Blog Added Sucessfully')
        })
    };
    return (
        <div>
            <Header />
            <div className="mt-10 mb-10 container mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="pb-3 block text-sm font-medium text-gray-700" htmlFor="title">Blog Title</label>
                        <input className="block w-full text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="title" placeholder="Blog Title" {...register("title")} />
                        <br/>              
                    <label className="pb-3 block text-sm font-medium text-gray-700" htmlFor="description">Blog Description</label>
                        <textarea className="block w-full text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" name="description" placeholder="Description" {...register("description")} />
                        <br/>
                    <label className="block text-sm font-medium text-gray-700" htmlFor="image">Upload Service Image</label>
                        <input className="pb-3 pt-3" name="image" type="file" onChange={handleImageUpload} />
                        <br/>
                        <input className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit" />
                </form> 
            </div>
            <Footer />
        </div>
    );
};

export default AddBlog;