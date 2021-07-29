import axios from "axios";

export const getRepos = () => async (dispatch, getState) => {
    const { token } = getState().userData
    const repos = (await axios.get('http://localhost:8000/api/repos', { headers: { token } })).data
    dispatch({
        type : "GET_REPOS",
        payload : repos
    })
}

export const addRepos = (link) => async (dispatch, getState) => {
    const { token } = getState().userData
    await axios.post('http://localhost:8000/api/repos', {link}, { headers: { token } })
    dispatch(getRepos())
}

export const deleteRepos = (id) => async (dispatch, getState) => {
    const { token } = getState().userData
    await axios.delete(`http://localhost:8000/api/repos/${id}`, { headers: { token } })
    dispatch(getRepos())
}

export const updateRepos = (id) => async (dispatch, getState) => {
    const { token } = getState().userData
    await axios.patch(`http://localhost:8000/api/repos/${id}`, null, { headers: { token } })
    dispatch(getRepos())
}

