import React from "react";
import MyPosts from "./MyPosts";
import { actions } from "../../../Redux/profile-reducer"
import { connect } from "react-redux"
import { AppStateType } from "../../../Redux/redux-store";


/*let mapStateToProps = (state: AppStateType) => {
  return {
     posts: state.profilesPage.posts,
     newPostText: state.profilesPage.newPostText,
  }
}

const MyPostsContainer = connect(mapStateToProps,{
  addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer*/