import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number,
        onDelComment: PropTypes.func.isRequired
    }
    constructor() {
        super()
        this.state = {
            timestring: ''
        }
    }
    updateTimestring() {
        let interval = new Date().getTime() - this.props.comment.timestamp
        let seconds = Math.round(interval / 1000)
        this.setState({
            timestring: seconds < 60 
                ? seconds + ' 秒前'
                : Math.round(seconds / 60) + ' 分钟前'
        })
    }
    delComment() {
        this.props.onDelComment(this.props.index)
    }
    componentWillMount() {
        this.updateTimestring()
        this.timer = setInterval(this.updateTimestring.bind(this), 5000)
    }
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span className="comment-username">{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-timestamp">
                    {this.state.timestring}
                </span>
                <span className='comment-delete' onClick={this.delComment.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
}

export default Comment