import React from "react";
import { Avatar, Image } from "antd";

const ChatBoxSender = ({ avatar, user, message }) => {
  return (
    <div
      style={{
        display: "flex",
        paddingRight: 10,
        justifyContent: "flex-end",
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
          backgroundColor: "#fff",
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

export default ChatBoxSender;
