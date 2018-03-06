import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    changeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }
    changeContent(e) {
        this.setState({
            content: e.target.value
        })
    }
    commit() {
        if(this.props.onSubmit) {
            this.props.onSubmit(this.state)
        }
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={this.changeUsername.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea 
                            cols="30" 
                            rows="10" 
                            value={this.state.content} 
                            onChange={this.changeContent.bind(this)}>
                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.commit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput