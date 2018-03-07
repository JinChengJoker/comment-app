import React, { Component } from 'react'
import Comment from './Comment.js'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return <Comment comment={comment} key={i} />
                })}
            </div>
        )
    }
}

export default CommentList