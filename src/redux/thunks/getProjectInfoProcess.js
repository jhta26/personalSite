import getProjectInfo from '../../requests/getProjectInfo'

export default function getProjectInfoProcess(){
	return(dispatch,getState,env)=>{
		
		return getProjectInfo()
		.then(projectInfo=>{
			dispatch({type: 'GET_PROJECT_INFO',projectInfo:projectInfo})
			return projectInfo
		})
		.catch(error=>{
			dispatch({type: 'GET_PROJECT_INFO_FAILED'})
		})
	}
}