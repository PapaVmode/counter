import React from 'react';
import './App.css';
import CounterBlock from './components/counterBlock';
import ValuesBlock from './components/valuesBlock';
import { connect } from 'react-redux';
import { increaseAC, resetNumberAC, settingValuesAC, setValuesAC, saveStateAC } from './components/store/reducer';


class App extends React.Component {

  increase = () => {
    this.props.increase();
  }

  resetNumber = () => {
    this.props.resetNumber();
  }

  settingValues = (max, start) => {
    this.props.settingValues(max, start);
  }

  setValues = () => {
    this.props.setValues();
    this.saveState();
  }

  saveState = () => {
    let stateAsString = JSON.stringify(this.props.state);
    localStorage.setItem('counter', stateAsString);
  }

  restoreState = () => {
    let state = {};
    let stateAsString = localStorage.getItem("counter");
    if (stateAsString != null) {
      state = JSON.parse(stateAsString);
      this.props.saveState(state);
    } 
  }

  componentDidMount() {
    this.restoreState();
  }


  render() {
    return (<div className='blocks'>
      < ValuesBlock state={this.props.state} settingValues={this.settingValues} setValues={this.setValues} />
      < CounterBlock state={this.props.state} increase={this.increase} resetNumber={this.resetNumber} />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.prikol[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => {
      dispatch(increaseAC())
    },
    resetNumber: () => {
      dispatch(resetNumberAC())
    },
    settingValues: (max, start) => {
      dispatch(settingValuesAC(max, start))
    },
    setValues: () => {
      dispatch(setValuesAC())
    },
    saveState: (state) => {
      dispatch(saveStateAC(state));
    }
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;


