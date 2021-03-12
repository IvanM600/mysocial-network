import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react"


let state = {
    posts: [
        {id: 0, message: "Hi, how are you?", likesCount: "40"},
        {id: 1, message: "Its my first post", likesCount: "35"},
      ],
}

test('length of posts should be incremented', () => {
    let action = addPostActionCreator("jstoppp")
    let newState = profileReducer(state, action)
   expect(newState.posts.length).toBe(3);
  });
  

  test('message of new post should be jstoppp', () => {
    let action = addPostActionCreator("jstoppp")
    let newState = profileReducer(state, action)
   expect(newState.posts[2].message).toBe("jstoppp")
  });


  
  test('after deleting length of messages should be decrement', () => {
    let action = deletePost(0)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
  });

  test('after deleting length shouldnt be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
  });


