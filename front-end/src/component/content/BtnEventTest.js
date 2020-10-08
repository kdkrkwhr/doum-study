import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BtnEventTest extends Component { 

  // default props 설정
  static defaultProps = {
    name : "main"
  }

  state = {
    btnClickCnt : 0
  }

  constructor(props) {
    super(props);
    console.log('constructor');
  }
  
  //componentWillMount() {
  //  console.log('componentWillMount (deprecated)');
  //}

  componentDidMount() {
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청: Ajax, GraphQL, etc
    // DOM 에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log('componentDidMount : 컴포넌트 화면 출력 시 호출');
  }

 // static getDerivedStateFromProps(nextProps, prevState) {
    // 여기서는 setState 를 하는 것이 아니라
    // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로
    // 사용됩니다.
    /*
    if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
    }
    return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
    */
  //}

  shouldComponentUpdate(nextProps, nextState) {
    // return false 하면 업데이트(render() 호출)를 안함
    // return this.props.checked !== nextProps.checked
    // 5 의 배수라면 리렌더링 하지 않음
    console.log('shouldComponentUpdate');
    if (nextState.btnClickCnt % 5 === 0) return false;
    return true;
  }

  //componentWillUpdate(nextProps, nextState) {
    // shouldComponentUpdate 에서 true 를 반환했을때만 호출됩니다.
    //console.log('componentWillUpdate (deprecate)');
  //}

  //getSnapshotBeforeUpdate(prevProps, prevState) {
    // 발생 시기
    // render()
    // getSnapshotBeforeUpdate()
    // 실제 DOM 에 변화 발생
    // componentDidUpdate
  //  console.log("getSnapshotBeforeUpdate");
  //}
  
  componentDidUpdate(prevProps, prevState) {
    // 컴포넌트에서 render() 를 호출하고난 다음에 발생합니다.
    // this.props 와 this.state 가 바뀌어있습니다.
    // 파라미터를 통해 이전의 값인 prevProps 와 prevState 를 조회 할 수 있습니다.
    // getSnapshotBeforeUpdate 에서 반환한 snapshot 값은 세번째 파라미터 값으로 받아옵니다.
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // 이벤트, setTimeout, 외부 라이브러리 인스턴스 제거
  }

  // 버튼 +클릭 이벤트 함수
  handleIncrease = () => {
    this.setState(
      (state) => ({
        btnClickCnt : state.btnClickCnt + 1
      })
    );
  }

  handleDecrease = () => {
    const { btnClickCnt } = this.state;
    this.setState({
      btnClickCnt : btnClickCnt - 1
    })
  }

  render() {
    return (
      <div className="BtnEventTest">
        <p>
          {this.props.name} 입니다...
        </p>
        <Button color="danger" onClick={this.handleIncrease}>+</Button>
        <Button onClick={this.handleDecrease}>-</Button>
        <p>
          버튼 누른 횟수 : {this.state.btnClickCnt}
        </p>
      </div>
    );
  }
}

export default BtnEventTest;