import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator} from "../../../Redux/profile-reducer"
import { connect } from "react-redux"


let mapStateToProps = (state) => {
  return {
     posts: state.profilesPage.posts,
     newPostText: state.profilesPage.newPostText,

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer