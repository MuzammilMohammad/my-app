export const signUpData = (state) => async (dispatch) => {
    console.log(state,"action")
    dispatch({
        type: "SIGNUP",
        payload: {
            userid:new Date().getTime().toString(),
            signupdata:state,
        }
    });

};


export const deleteSignUpData = (state) => async (dispatch) => {
    dispatch({
        type: "DELETE",
        payload: state,
    });

};