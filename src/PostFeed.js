import React from 'react';
import { RouteComponentProps } from 'react-router-dom';


type CombinedProps = RouteComponentProps<{}>;



  class PostFeed extends React.Component<CombinedProps> {

  onClick = (e: any) => {
    const {
        history: { push }
      } = this.props;
      push("/newpost")
  }


  editClick = (e: any) => {
    const {
        history: { push }
      } = this.props;
      push("/editpost")
  }

  applyClick = (e: any) => {
    const {
        history: { push }
      } = this.props;
      push("/")
  }

  render() {
    return (
      <div>
        <h1 className='sign'>Welcome to Social Posts</h1>

<div>
<label className='fonts' >Create Your Own Story </label>
<button type="submit" className='submit'  onClick={this.onClick}
>Add Post</button>
</div>

  <div className='Feeds'>
  <button type="submit" className='submitfeeds' onClick={this.editClick}
  >Edit</button>

  <button type="submit" className='submitfeeds' onClick={this.applyClick}
  >Delete</button>
  <div>
    <label className='fontstitle' >Post Title </label>
    </div>
    <div>
      <label className='fontsbody' >Post Body </label>
      </div>
  </div>
      </div>
    );
  }
}



export default PostFeed ;
