export default function rootReducer(
  currentState = {
    resume: [],
    projects: { name: 'Jason' }
  },
  action
) {
  switch (action.type) {
    case 'GET_RUBRICS_STARTED':
      return {
        ...currentState,
        isGettingRubrics: true
      };

  }
}