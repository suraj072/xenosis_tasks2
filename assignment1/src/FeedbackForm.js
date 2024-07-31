import React, { useState } from "react";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "",
    comments: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.rating) {
      errors.rating = "Rating is required";
    } else if (formData.rating < 1 || formData.rating > 5) {
      errors.rating = "Rating must be between 1 and 5";
    }
    if (!formData.comments) errors.comments = "Comments are required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
    } else {
      setFormErrors(errors);
    }
  };

  if (isSubmitted) {
    return (
      <div>
        <h2>Thank You for Your Feedback!</h2>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Rating:</strong> {formData.rating}
        </p>
        <p>
          <strong>Comments:</strong> {formData.comments}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {formErrors.name && <span>{formErrors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <span>{formErrors.email}</span>}
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="1"
          max="5"
        />
        {formErrors.rating && <span>{formErrors.rating}</span>}
      </div>
      <div>
        <label>Comments:</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
        {formErrors.comments && <span>{formErrors.comments}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
