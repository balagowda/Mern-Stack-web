import React, { useContext, useEffect, useState } from "react";
import { Divider } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import "./view.css";
import { LoginContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const View = () => {
  const [proData, setProData] = useState("");
  const { id } = useParams();

  const { account, setAccount } = useContext(LoginContext);

  const reDirect = useNavigate("");

  //Fetching product data
  const getProductData = async () => {
    const res = await fetch(`/getproducts/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status !== 201) {
      console.log("No data available");
    }

    const data = await res.json();
    setProData(data);
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  //Adding item to cart
  const addToCart = async (id) => {
    const checkRes = await fetch(`/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proData,
      }),
      credentials: "include",
    });

    const reply = await checkRes.json();
    // console.log(reply);

    if (checkRes.status === 401 || !reply) {
      console.log("Invalid User");
    } else {
      toast.success("Item added to cart", {
        position: "top-center",
      });
      reDirect("/cart");
      setAccount(reply);
    }
  };

  return (
    <div className="view_section">
      {proData && Object.keys(proData).length && (
        <div className="view_container">
          <div className="left_view">
            <img src={proData.detailUrl} alt="view" />
            <div className="view_btn">
              <button className="view_btn1" onClick={() => addToCart(id)}>
                Add to cart
              </button>
              <button className="view_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_view">
            <h3>{proData.title.shortTitle}</h3>
            <h4>{proData.title.longTitle}</h4>
            <Divider />
            <p className="mrp">
              M.R.P. : <del>₹{proData.price.mrp}</del>
            </p>
            <p>
              Deal of the Day :{" "}
              <span style={{ color: "#B12704" }}>₹{proData.price.cost}.00</span>
            </p>
            <p>
              You save :{" "}
              <span style={{ color: "#B12704" }}>
                {" "}
                ₹{proData.price.mrp - proData.price.cost} (
                {proData.price.discount}){" "}
              </span>
            </p>

            <div className="discount_box">
              <h5>
                Discount :{" "}
                <span style={{ color: "#111" }}>{proData.discount}</span>{" "}
              </h5>
              <h4>
                FREE Delivery :{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Aug 8 - 23
                </span>{" "}
                Details
              </h4>
              <p style={{ color: "#111" }}>
                Fastest delivery:{" "}
                <span style={{ color: "#111", fontWeight: "600" }}>
                  {" "}
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Iteam :{" "}
              <span
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                {proData.description}
              </span>
            </p>
          </div>
          <ToastContainer />
        </div>
      )}

      {!proData ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default View;
