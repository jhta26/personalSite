import {compose,lifecycle} from 'recompose'
import {connect} from 'react-redux'
import ProjectPage from '../../components/ProjectPage'
import getProjectInfoProcess from '../thunks/getProjectInfoProcess'


// projectInfo,onShowProject,selectedProject
function mapStateToProps(state,ownProps){
    return{...state}
}

function mapDispatchToProps(dispatch,ownProps){
    return{
        onMount: ()=>dispatch(getProjectInfoProcess()),
        onShowProject: selectedProject=>dispatch({type:'SELECT_PROJECT',selectedProject:selectedProject}),
        onCloseProject:()=>dispatch({type:'CLOSE_PROJECT'}) 

    }
}

const connectToStore = connect(mapStateToProps,mapDispatchToProps)

const onDidMount = lifecycle({
    componentDidMount(){
        this.props.onMount()
    }
})

export default compose(connectToStore,onDidMount)(ProjectPage)