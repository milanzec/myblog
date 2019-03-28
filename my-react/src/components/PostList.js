import React from "react";
import posts from "../Posts";
import PostListItem from "./PostListItem";

const PostList = (props) => (
    posts.map((post) => (
        <PostListItem
            title={post.title}
            body={post.body}
            key={post.id}
            color="light blue"
            brightness='lighten-1' />
    ))
)

export default PostList;