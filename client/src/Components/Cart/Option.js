import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import SearchIcon from '@mui/icons-material/Search';

const Option = () => {
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
      <p style={{ cursor: "pointer" }}>
        <DeleteIcon />
        Delete
      </p><span>|</span>
      <p style={{ cursor: "pointer" }} className="forremovemedia">
        <TurnedInIcon/>
        Save or Later
      </p><span>|</span>
      <p style={{ cursor: "pointer" }} className="forremovemedia">
        <SearchIcon/>
        See More Like This
      </p>
    </div>
  );
};

export default Option;
