import React from "react";

const PostListItem = (props) => {

    let classColor = `card ${props.color} ${props.brightness}`;

    return (
        <div className="container">
            <div className="col s12">
                <div className={classColor}>
                    <div className="card-content white-text">
                        <span className="card-title">{props.title}</span>
                        <p>{props.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostListItem;