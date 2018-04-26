export default function rootReducer(
  currentState = {
    rubrics: [],
    selected: { name: 'Jason' }
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