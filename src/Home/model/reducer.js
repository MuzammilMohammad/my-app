const initialData = {
  data: [
	],

};

export default function DocumentData(state = initialData, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: action.payload,
      };
    case "DELETE":
      
     const newdata= state.data.filter((e)=>e.id !== action.id)
    // const newdata= state.data.splice(action.id, 1);
console.log(action.id,"reducer")

      return{
        ...state,
       data: newdata
      }
      
    default:
      return state;
  }
}
