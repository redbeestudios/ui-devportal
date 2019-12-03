import axios from 'axios';

const setSpecs = (data) => ({
    type: "SET_SPECS",
    data,
});

export const specsReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_SPECS":
            return action.data;
        default: return state;
    }
};

export const fetchSpecs = () => (dispatch) =>
    axios
      .get('http://localhost:9000/api/specs')
      .then(res => {
        dispatch(setSpecs(res.data));
      })
      .catch(err => console.log(err));
