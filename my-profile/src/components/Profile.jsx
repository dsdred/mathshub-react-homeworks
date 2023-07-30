import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileBio from "./ProfileBio";
import ProfileCitation from "./ProfileCitation";
import ProfileHobbies from "./ProfileHobbies";

function Profile() {
  return (
    <>
      <ProfilePicture />
      <ProfileName />
      <ProfileBio />
      <ProfileCitation />
      <ProfileHobbies />
    </>
  );
}

export default Profile;
