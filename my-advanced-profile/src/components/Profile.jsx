import React from "react";
import ProfilePicture from "./ProfilePicture";
import ProfileName from "./ProfileName";
import ProfileBio from "./ProfileBio";
import ProfileCitation from "./ProfileCitation";
import ProfileHobbies from "./ProfileHobbies";
import Counter from "./Counter";

function Profile({ userData }) {
  return (
    <>
      <ProfilePicture src={userData.imageURL} />
      <ProfileName name={userData.name} />
      <ProfileBio bio={userData.bio} />
      <ProfileCitation quote={userData.quote} />
      <ProfileHobbies hobbies={userData.hobbies} />
      <Counter counter={userData.counter} />
    </>
  );
}

export default Profile;
