import React from 'react';

export default  class BlogFrom extends React.Component {
   
  state = {
      description: this.props.information ? this.props.information.description : '',
      note: this.props.information ? this.props.information.note : '',
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
          note: this.state.note
        })
      }
    };

    render() {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input 
               type="text"
               placeholder="description" 
               autoFocus
               value={this.props.description}
               onChange={this.onDecriptionChange}
            />
            <textarea 
               placeholder="post.."
               value={this.props.note}
               onChange={this.onNoteChange}
            />
            <button>Post</button>
          </form>
        </div>
      );
    }
};

