import React, { Component } from 'react';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  onClick = (e: any) => {

    const {
        history: { push }
      } = this.props;
      push("/newpost")
  }




  render() {
    return (
      <div>
        <h1 className='sign'>Edit Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label className='fonts' >Title </label>
            <br />
            <input
              type="text"
              className='userInput'
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label className='fonts' >Post </label>
            <br />
            <textarea
              name="body"
              className='userInput'
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" className='submit'onClick={this.onClick}
>Apply</button>
        </form>
      </div>
    );
  }
}



export default PostEdit ;
