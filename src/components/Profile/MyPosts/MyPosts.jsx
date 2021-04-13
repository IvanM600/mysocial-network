import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators"
import {Textarea} from "../../common/FormsControls/FormsControls"
import { useDispatch, useSelector } from "react-redux";
import {actions} from "../../../Redux/profile-reducer"


const maxLength10 = maxLengthCreator(10)

/*class MyPosts extends Component {

render() {
  let addNewPost = (values) => {
    this.props.addPost(values.newPostText)
  }
  
  let newPostElements = React.createRef();
  
  let postsElements = this.props.posts
  .map( posts => <Post message={posts.message} likesCount={posts.likesCount} profile={this.props.profile} />)

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>

      <AddPostReduxForm onSubmit={addNewPost} />

      <div className={classes.Posts}>
        { postsElements }
      </div>
    </div>

  )
}
}*/

const MyForm = (props) => {
  return ( 
  <form className={classes.myPosts} onSubmit={props.handleSubmit}>
    <div>
         <Field placeholder="Enter your message" name="newPostText" component={Textarea} validate={[required, maxLength10]}/>
    </div>
    <div>
         <button>Add post</button>
    </div>
  </form>
  )
}

const AddPostReduxForm = reduxForm({
  form: "addPostForm"
})(MyForm)


export const MyPosts = () => {

     const posts = useSelector(state => state.profilesPage.posts)
     const profile = useSelector(state => state.profilesPage.profile)
     const newPostText = useSelector(state => state.profilesPage.newPostText)
     const dispatch = useDispatch()
  
    let addNewPost = (values) => {
      dispatch(actions.addPostActionCreator(values.newPostText))
    }
    
    //let newPostElements = React.createRef();
    
    let postsElements = posts
    .map( posts => <Post message={posts.message} likesCount={posts.likesCount} profile={profile} />)
  
    return (
      <div className={classes.postsBlock}>
        <h3>My posts</h3>
  
        <AddPostReduxForm onSubmit={addNewPost} />
  
        <div className={classes.Posts}>
          { postsElements }
        </div>
      </div>
  
    )
  }


export default MyPosts