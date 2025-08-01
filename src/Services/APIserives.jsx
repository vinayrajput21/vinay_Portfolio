import axios from "axios";
import { toast } from "react-toastify";

export const hireMeAPI = async (payload) => {
  try {
    const response = await axios.post(
      "https://d9wrbhgmq0.execute-api.ap-south-1.amazonaws.com/dev/hireme",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (err) {
    toast.error("Failed to hire. Please try again.", {
      position: "top-right",
      autoClose: 3000,
    });
    throw err;
  }
};
