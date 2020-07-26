import React from 'react'
import { Link } from 'react-router-dom';




const BlogItems = ({ id, description, note, createdAt }) => (
   <div>
      <Link to={`/edit/${id}`}>
         <h3>{description}</h3>
      </Link>
      <p>{note}</p>
      <h4>{createdAt}</h4>
   </div>
);

export default BlogItems;