import React, { Component } from "react";
import * as actionCreators from "../../store/actions/actions";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions/actions";
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
        <button onClick={() => this.props.onStoreHandler(this.props.ctr)}>
          Store Result
        </button>

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
    ctr: state.ctr.counter, //chnaged from state.counter after combining
    res: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddCounter: () => dispatch(actionCreators.add(5)),
    onSubtractCounter: () => dispatch(actionCreators.subtract(5)),
    onStoreHandler: result => dispatch(actionCreators.storeResult(result)),
    onDeleteHandler: id => dispatch(actionCreators.deleteResult(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
