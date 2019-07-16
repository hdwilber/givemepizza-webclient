export function generateActionTypes(list) {
  return list.reduce((acc, action) => {
    const label = action.toUpperCase()
    acc[action] = [
      label,
      `${label}_SUCCESS`,
      `${label}_FAILED`,
    ]
    return acc
  }, {})
}

