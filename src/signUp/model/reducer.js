const initialData = {
  data: [],
  signUP: [],
};

export default function SignUpData(state = initialData, action) {
  switch (action.type) {
    case "DELETE":
      return {
        signupdata: action.payload,
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
