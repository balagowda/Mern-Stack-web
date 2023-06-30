import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SearchIcon from "@mui/icons-material/Search";
import { LoginContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Option = ({ deleteData, get }) => {
  const { account, setAccount } = useContext(LoginContext);

  const deleteItem = async (id) => {
    const res = await fetch(`/delete/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const reply = await res.json();

    if (res.status === 400 || !reply) {
      console.log("error in removing item from cart");
    } 
    else {
      setAccount(reply);
      get();
      toast.success("Item removed from cart", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="add_remove_select">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => deleteItem(deleteData)}>
        <DeleteIcon />
        Delete
      </p>
      <span>|</span>
      <p style={{ cursor: "pointer" }} className="forremovemedia">
        <TurnedInIcon />
        Save or Later
      </p>
      <span>|</span>
      <p style={{ cursor: "pointer" }} className="forremovemedia">
        <SearchIcon />
        See More Like This
      </p>
      <ToastContainer />
    </div>
  );
};

export default Option;
