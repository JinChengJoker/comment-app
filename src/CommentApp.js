import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    getComment(comment) {
        let comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments: comments
        })
        this.saveComments(comments)
    }
    saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    loadComments() {
        let comments = JSON.parse(localStorage.getItem('comments')) || []
        this.setState({
            comments: comments
        })
    }
    delComment(i) {
        let comments = this.state.comments
        comments.splice(i, 1)
        this.setState({
            comments: comments
        })
        this.saveComments(comments)
    }
    componentWillMount() {
        this.loadComments()
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.getComment.bind(this)} />
                <CommentList comments={this.state.comments} onDelComment={this.delComment.bind(this)} />
            </div>
        )
    }
}

export default CommentApp