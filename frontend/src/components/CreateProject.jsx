import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../axios'; // Use axios instance from your configured axios.js

const CreateProject = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    category: '',
    goalAmount: '',
    image: null // Store the selected image file
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null); // State for success message

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
    setLoading(true);
    setError(null);
    setSuccessMsg(null); // Reset success message on each submit

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('goalAmount', goalAmount);
    formData.append('image', image); // Ensure 'image' matches the backend multer upload field name

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };

    try {
      const res = await axios.post('/projects', formData, config); // Adjust URL to match your backend endpoint
      console.log(res.data);
      setSuccessMsg('Project created successfully'); // Set success message

      // Clear success message after 3 seconds (3000 ms)
      setTimeout(() => {
        setSuccessMsg(null);
      }, 3000);
    } catch (err) {
      console.error(err.response.data);
      setError(err.response.data.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Create New Project</h2>
      <form onSubmit={onSubmit} className="p-4 shadow-sm mx-5">
        {error && <div className="alert alert-danger">{error}</div>}
        {successMsg && <div className="alert alert-success">{successMsg}</div>} {/* Show success message */}
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
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? 'Creating...' : 'Create Project'}
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
