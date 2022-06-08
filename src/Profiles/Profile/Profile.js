import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  props.handleName(` Are you  ${props.fullName} `);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}</h2>
      <h5>I am a {props.profession}</h5>
      <p> {props.bio}</p>
      <button onClick={() => props.handleName(`Hello i am  ${props.fullName} `)}>
        Approved
      </button> 
    </>
  );
};

Profile.defaultProps = {
  fullName: "Dhia Bachtouli",
  profession: "Full Stack Developer",
  bio:
    "checkpoint state2",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};
export default Profile;