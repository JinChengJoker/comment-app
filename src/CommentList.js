import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment.js'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDelComment: PropTypes.func.isRequired
    }
    static defaultProps = {
        comments: []
    }
    constructor() {
        super()
        this.state = {}
    }
    delComment(i) {
        this.props.onDelComment(i)
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return <Comment 
                                comment={comment} 
                                key={comment.timestamp} 
                                index={i} 
                                onDelComment={this.delComment.bind(this)}
                            />
                })}
            </div>
        )
    }
}

export default CommentList