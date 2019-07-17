export const types = {
  setPage: 'SET_PAGE',
}

export function setPage(page) {
  return {
    type: types.setPage,
    payload: {
      page,
    }
  }
}
