import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
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
        if(!this.state.username) {
            return alert('请输入用户名')
        }
        if(!this.state.content) {
            return alert('请输入评论内容')
        }
        if(this.props.onSubmit) {
            this.props.onSubmit({
                ...this.state,
                timestamp: new Date().getTime()
            })
            this.setState({
                content: ''
            })
        }
    }
    saveUsername() {
        if(this.state.username !== '') {
            localStorage.setItem('username', this.state.username)
        }
    }
    loadUsername() {
        let username = localStorage.getItem('username')
        this.setState({
            username: username
        })
    }
    componentWillMount() {
        this.loadUsername()
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
                            onBlur={this.saveUsername.bind(this)}
                            ref={(input) => { this.input = input }}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea 
                            value={this.state.content} 
                            onChange={this.changeContent.bind(this)}
                            ref={(textarea) => { this.textarea = textarea }}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.commit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
    componentDidMount() {
        if(this.state.username === '') {
            this.input.focus()
        } else {
            this.textarea.focus()
        }
    }
}

export default CommentInput