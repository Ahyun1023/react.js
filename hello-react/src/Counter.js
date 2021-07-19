import React, {Component} from 'react';

class Counter extends Component {
    /*constructor(props) {
        super(props);
        //state의 초깃값 설정
        this.state = {
            number: 0,
            fixNumber: 0
        };
    }*/

    state = {
        number: 0,
        fixNumber: 0
    }

    render(){
        const {number, fixNumber} = this.state;
        /*return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixNumber}</h2>
                <button
                //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                onClick={() => {
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
                    this.setState({number: number + 1});
                    this.setState({ number: this.state.number + 1 });
                }}
                >
                    +1
                </button>
            </div>
        );*/
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixNumber}</h2>
                <button
                //onClick을 통해 버튼이 클릭되었을 때 호출할 함수 지정
                onClick={() => {
                    this.setState(prevState =>{
                        return {
                            number: prevState.number + 1
                        };
                    });

                    //위 코드와 아래 코드는 완전히 같은 기능을 수행
                    //아래 코드는 함수에서 바로 객체를 반환

                    /*this.setState(prevState => {
                        number: prevState.number + 1
                    });*/
                }}
                >
                    +1
                </button>
            </div>
        )
    }
}

export default Counter;