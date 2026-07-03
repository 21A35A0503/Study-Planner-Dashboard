export function subjectReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload,
          completed: false,
        },
      ];
    case "DELETE":
      return state.filter(
        (item) => item.id !== action.payload
      );
    case "TOGGLE":
      return state.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      );
    default:
      return state;
  }
}