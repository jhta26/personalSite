export default function rootReducer(
    currentState = {
        projectInfo: [],
        selectedProject: "",
        showProject: false
    },
    action
) {
    switch (action.type) {
        case 'GET_PROJECT_INFO':
            return {
                ...currentState,
                projectInfo: action.projectInfo
            };
        case 'SELECT_PROJECT':
            return {
                ...currentState,
                selectedProject: action.selectedProject,
                showProject:true
            }
    }

}