import axios from "axios";
const communicateServer = (value) => {
    let index, resMessage;
    axios
      .post(
        "/api/hi",
        {
          numbers: value //arrayRef.current.value
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        index = response.data.index;
        console.log(response.data.index)
        if (response.data.index === 0)  {
          resMessage = "No number that satisfy the condition"
        } else {
          resMessage = ""
        }
      })
      .catch((error) => {
        console.log(error)
        resMessage = "Check your input!"
        index = 0;
      });

      return {resMessage, index}
  }

  export default communicateServer;