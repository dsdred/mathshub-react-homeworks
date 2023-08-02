import React from "react";

function ProfileHobbies({ hobbies }) {
  return (
    <div>
      <ul>
        <li>{hobbies[0]}</li>
        <li>{hobbies[1]}</li>
        <li>{hobbies[2]}</li>
        <li>{hobbies[3]}</li>
      </ul>
    </div>
  );
}

export default ProfileHobbies;
