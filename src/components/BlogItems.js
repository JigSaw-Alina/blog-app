import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReadMoreReact from 'read-more-react';



const BlogItems = ({ id, description, note, createdAt }) => (
   <div>
      <Link className="list-item" to={`/edit/${id}`}>
         <h3 className="list-item__title">
            <ReadMoreReact text={description}
               min={42}
               ideal={42}
               max={200} 
               readMoreText=".....click here to read more"         
            />
         </h3>
         <h4 className="list-item_date">{moment(createdAt).format('MMMM Do, YYYY')}</h4>
         <p className="list-item__sub">
            <ReadMoreReact text={note} 
               min={50}
               ideal={100}
               max={200}
               readMoreText=".....click here to read more"
            />
         </p>
         
      </Link>
      
   </div>
);

export default BlogItems