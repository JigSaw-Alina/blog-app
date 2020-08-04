import React from 'react';
import moment from 'moment';

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
      console.log(this.state)
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input 
               type="text"
               placeholder="description" 
               autoFocus
               value={this.state.description}
               onChange={this.onDecriptionChange}
            />
            <textarea 
               placeholder="post.."
               value={this.state.note}
               onChange={this.onNoteChange}
            />
            <button>Post</button>
          </form>
        </div>
      );
    }
};

