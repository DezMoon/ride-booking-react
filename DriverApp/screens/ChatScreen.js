import React, { useState } from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
