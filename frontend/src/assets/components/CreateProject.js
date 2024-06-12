import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const CreateProject = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [project, setProject] = useState({
    title: '',
    description: '',
    category: '',
    goalAmount: '',
    image: null // Store the selected image file
  });

  const { title, description, category, goalAmount, image } = project;

  const onChange = e => {
    if (e.target.name === 'image') {
      setProject({ ...project, image: e.target.files[0] });
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('goalAmount', goalAmount);
    formData.append('image', image);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-auth-token': localStorage.getItem('token')
      }
    };
    
    try {
      const res = await axios.post('/api/projects', formData, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Create New Project</h2>
      <form onSubmit={onSubmit} className="p-4 shadow-sm mx-5">
        <div className="form-group mt-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={title} onChange={onChange} placeholder="Enter project title" required />
        </div>
        <div className="form-group mt-3">
          <label>Description</label>
          <textarea className="form-control" name="description" value={description} onChange={onChange} placeholder="Enter project description" required></textarea>
        </div>
        <div className="form-group mt-3">
          <label>Category</label>
          <input type="text" className="form-control" name="category" value={category} onChange={onChange} placeholder="Enter project category" required />
        </div>
        <div className="form-group mt-3">
          <label>Goal Amount</label>
          <input type="number" className="form-control" name="goalAmount" value={goalAmount} onChange={onChange} placeholder="Enter goal amount" required />
        </div>
        <div className="form-group mt-3">
          <label>Image</label>
          <input type="file" className="form-control" name="image" onChange={onChange} required />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
