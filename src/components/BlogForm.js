import React from 'react';
import moment from 'moment';
import { BsFilePost } from 'react-icons/bs'

export default  class BlogFrom extends React.Component {
   
  state = {
      description: this.props.information ? this.props.information.description : '',
      note: this.props.information ? this.props.information.note : '',
      createdAt: this.props.information ? moment(this.props.information.createdAt) : moment(),
      error: ''
    }


    onDecriptionChange = (e) => {
      const description = e.target.value
      this.setState(() => ({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }


    onSubmit = (e) => {
      e.preventDefault();
      if (!this.state.description || !this.state.note) {
        this.setState(() => ({ error: 'Please provide description and post' }))
      } else {
        this.setState(() => ({ error: '' }))
        this.props.onSubmit({
          description: this.state.description,
          note: this.state.note,
          createdAt: this.state.createdAt.valueOf()
        })
      }
    };

    render() {
      return (
        <div>
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input 
               className="text_input"
               type="text"
               placeholder="description" 
               autoFocus
               value={this.state.description}
               onChange={this.onDecriptionChange}
            />
            <textarea 
               className="text_area"
               placeholder="POST YOUR PODCAST..."
               value={this.state.note}
               onChange={this.onNoteChange}
            />
            <div>
              <button className="post_btn"><BsFilePost /></button>
            </div>
          </form>
        </div>
      );
    }
};

