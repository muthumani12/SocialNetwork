import React, { Component } from 'react';
import { connect} from 'react-redux';
import {userAction} from './App';

class PostForm extends Component {
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
      this.props.Userpost()
      push("/")
  }

  onChange = (e: any) => {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
      <div>
        <h1 className='sign'>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label className='fonts' >Title </label>
            <br />
            <input
              type="text"
              className='userInput'
              name="title"
              onChange={this.onChange}
              placeholder="Enter Your Post Title"
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
              placeholder="Enter Your Post"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" className='submit' onClick={this.onClick}
>Submit</button>
        </form>
      </div>
    );
  }
}


const mapStateToProps =(state) => {
  return state;
}


const mapDispatchToProps =(dispatch) => {
  return {
Userpost :() => dispatch(userAction())
  };
}



export default connect(mapStateToProps,mapDispatchToProps)(PostForm);
