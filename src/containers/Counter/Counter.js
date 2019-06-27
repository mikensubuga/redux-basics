import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";
class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        {/* <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        /> */}
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={this.props.onStoreHandler}>Store Result</button>

        <ul>
          {this.props.res.map(res => (
            <li key={res.id} onClick={() => this.props.onDeleteHandler(res.id)}>
              {res.value}
            </li>
          ))}

          {/* {this.props.res.map(num => {
            <li key={num}>{num}</li>;
          })} */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    res: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    onStoreHandler: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteHandler: id =>
      dispatch({ type: actionTypes.DELETE_RESULT, resId: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
