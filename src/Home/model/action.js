
export const AddingData = (state) => async (dispatch) => {
    console.log(state,"action")

    dispatch({
        type: "ADD",
        payload: state
    });

};


export const deleteData = (id) => async (dispatch) => {
    dispatch({
        type: "DELETE",
        id,
    });

};
