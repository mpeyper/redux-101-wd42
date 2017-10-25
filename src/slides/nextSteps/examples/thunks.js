export const example = `
const fetch = (id) => (dispatch) => {
  dispatch(loading(id))

  api.get(id)
    .then((data) => {
      dispatch(success(id, data))
    })
    .catch((error) => {
      dispatch(failed(id, error))
    })
}

const loading = (id) => ({
  type: 'LOADING',
  id
})

const success = (id, data) => ({
  type: 'SUCCESS',
  id,
  data
})

const failed = (id, error) => ({
  type: 'FAILED',
  id,
  error
})

const cappedIncrement = () => {
  return (dispatch, getState) {
    const { counter } = getState()

    if (counter < 10) {
      dispatch(increment())
    }
  }
}
`.trim()

export const locations = [
  { loc: [0, 38], title: "thunks" },
  { loc: [0, 11] },
  { loc: [0, 1] },
  { loc: [1, 2] },
  { loc: [3, 4] },
  { loc: [4, 7] },
  { loc: [7, 10] },
  { loc: [12, 28] },
  { loc: [29, 38] },
  { loc: [29, 31] },
  { loc: [31, 36] }
]
