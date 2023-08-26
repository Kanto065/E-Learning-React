import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddCourse = () => {

    const [category, setCategory] = useState([]);
    const [value, setValue] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://localhost:44389/api/Course/Create', {
            method: 'GET',
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        })
            .then(res => res.json())
            .then(data => { setCategory(data); console.log(data); })
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    }

    const handleAddCourse = (event) => {
        event.preventDefault();
        const Title = event.target.Title.value;
        const Description = event.target.Description.value;
        const Thumbnail = event.target.Thumbnail.value;
        const Learning = event.target.Learning.value;
        const Price = event.target.Price.value;
        const categoryId = value;
        console.log(categoryId);

        const course = { Description, Thumbnail, Title, Learning, categoryId, Price };
        const rs = JSON.stringify(course);
        console.log(rs);

        //post to server
        const url = 'https://localhost:44389/api/Course/Create';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'Authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(course)
        })
            .then()
            .then()
        navigate('/AllCourse')
    }


    return (
        // <div>
        //     add new course

        //     <form onSubmit={handleAddCourse}>
        //         <input type="text" name="Title" placeholder='Course Title' required />
        //         <input type="text" name="Description" placeholder='Description' required />
        //         <input type="text" name='Thumbnail' placeholder='Thumbnail' required />
        //         <input type="text" name='Learning' placeholder='Learning' required />
        // <select value={category.Id} onChange={handleChange} required>
        //     <option >---Select one---</option>
        //     {category.map((option) => (
        //         <option value={option.Id}>{option.Name}</option>
        //     ))}
        // </select>
        //         <input type="text" name='Price' placeholder='Price' required />
        //         <input type="submit" value="Add Course" />
        //     </form>

        // </div>
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleAddCourse}>
                    <div className="input-group">
                        <label htmlFor="Title">Course Title</label>
                        <input type="text" name="Title" placeholder='Course Title' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Description">Description</label>
                        <input type="text" name="Description" placeholder='Description' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Thumbnail">Thumbnail</label>
                        <input type="text" name='Thumbnail' placeholder='Thumbnail' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Learning">Learning</label>
                        <input type="text" name='Learning' placeholder='Learning' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="type">Category</label>
                        <select value={category.Id} onChange={handleChange} name='type' required>
                            <option >---Select one---</option>
                            {category.map((option) => (
                                <option value={option.Id}>{option.Name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="Price">Price</label>
                        <input type="text" name='Price' placeholder='Price' required />
                    </div>


                    <input className='form-submit' type="submit" value="Add Course" />
                </form>
                <p>
                    View Courses <Link className='form-link' to="/AllCourse">go to course list</Link>
                </p>
            </div>
        </div>


    );
};

export default AddCourse;