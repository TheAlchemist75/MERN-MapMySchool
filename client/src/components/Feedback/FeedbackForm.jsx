import React, { useState } from "react";
import axios from "axios";
import "./FeedbackForm.css";

const FeedbackForm = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/feedback", {
        email,
        comment,
      });
      setMessage(response.data.message);
      setEmail("");
      setComment("");
    } catch (error) {
      setMessage("Failed to submit feedback");
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comment">Feedback:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p className="feedback-message">{message}</p>}
    </div>
  );
};

export default FeedbackForm;
