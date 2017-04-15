/**
 * Created by Alejandro on 15.04.2017.
 */
// TODO change connect from method to annotation realisation.
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actionCreators from '../actions';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
