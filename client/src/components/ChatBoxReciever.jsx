import React from "react";
import { Avatar, Image } from "antd";

const ChatBoxReciever = ({ avatar, user, message }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
      }}
    >
      <Avatar
        size={50}
        src={
          <Image
            src={avatar}
            style={{
              objectFit: "cover",
              width: 45,
              height: 45,
              borderRadius: "100%",
            }}
            preview={false}
          />
        }
      />
      <p
        style={{
          padding: 10,
          backgroundColor: "#dcf8c6",
          borderRadius: 10,
          maxWidth: "60%",
        }}
      >
        <strong style={{ fontSize: 13 }}>{user}</strong> <br></br>
        {message}
      </p>
    </div>
  );
};

export default ChatBoxReciever;
