import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        //state의 초깃값 설정
        this.state = {
            number: 0
        };
    }

    render(){
        const {number} = this.state;
        return (
            <div>
                <button
                //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                    this.setState({number: number + 1});
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;