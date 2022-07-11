
export const LoginData = (state) => async (dispatch) => {
    dispatch({
        type: "LOGIN",
        payload: {
            id:new Date().getTime().toString(),
            data:state,
        }
    });

};


export const deleteLoginData = (state) => async (dispatch) => {
    dispatch({
        type: "DELETE",
        payload: state,
    });

};

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