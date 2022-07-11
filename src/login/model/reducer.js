const initialData = {
  data: [],
  signUP: [],
};

export default function LoginData(state = initialData, action) {
  switch (action.type) {
    case "LOGIN":
      const { id, data } = action.payload;
      console.log(action);
      return {
        data: [
          {
            id: id,
            data: data,
          },
        ],
      };
    case "DELETE":
      return {
        data: action.payload,
      };
    case "SIGNUP":
      const { userid, signupdata } = action.payload;
      console.log(userid, signupdata)
      return {
        signupdata: [
          {
            userid: userid,
            signupdata: signupdata,
          },
        ],
      };
    default:
      return state;
  }
}
