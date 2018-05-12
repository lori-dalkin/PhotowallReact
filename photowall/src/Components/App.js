import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {removePost} from '../redux/actions'

function mapStateToProps(state){
    return{
        posts: state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removePost}, dispatch)
}

//connected component is one that is connected to a redux store
const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App