import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state){
    return{
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

//connected component is one that is connected to a redux store
const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App