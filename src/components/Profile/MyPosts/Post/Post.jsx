import React from "react";
import classes from "./Post.module.css";
import userPhoto from "../../../../assets/images/user.png"

const Post = (props) => {
    return (
            <div className={classes.item}>
                <img src="http://static.mk.ru/upload/entities/2019/05/08/00/articles/detailPicture/c7/b5/08/6e/5dda626cb409b1fa6942c29040609e17.jpg" />
              { props.message }
              <div>
                 <span>like</span> {props.likesCount}
              </div>
            </div>
    )
}

export default Post