import React from "react";
import "./PostProfile.scss";

const PostProfile = props => {
  return (
    <div className="posts__profile">
      <img src={props.profile.photos.large} alt={props.profile.fullName} />
      <div>ID: {props.profile.userId}</div>
      <div>FullName: {props.profile.fullName}</div>
      <div>About Me: {props.profile.aboutMe}</div>
      <div>Looking For A Job: {props.profile.lookingForAJobDescription}</div>
      <div>
        Contacts:
        <div>Facebook: {props.profile.contacts.facebook}</div>
        <div>VK: {props.profile.contacts.vk}</div>
        <div>Twitter: {props.profile.contacts.twitter}</div>
        <div>Github: {props.profile.contacts.github}</div>
        <div>Instagram: {props.profile.contacts.instagram}</div>
        <div>Website: {props.profile.contacts.website}</div>
        <div>Youtube: {props.profile.contacts.youtube}</div>
        <div>Mail: {props.profile.contacts.mailLink}</div>
      </div>
    </div>
  );
};

export default PostProfile;
