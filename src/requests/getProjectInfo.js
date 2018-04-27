export default function getProjectInfo(){
	return fetch('/project-info/data/project-info.json').then(response =>
		response.json()
		)
}

