import React, { Component } from 'react';

class EventPratice extends Component {
    state = {
        message : ''
    }

    handlerChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={this.handlerChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default EventPratice;