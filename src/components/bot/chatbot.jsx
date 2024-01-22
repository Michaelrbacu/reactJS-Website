import React, { useState } from "react";
import axios from "axios"; 
import "./chatbot.css";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", message: "Hi there! How can I help you?" },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const handleUserMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (userMessage.trim() !== "") {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "user", message: userMessage },
      ]);

      // Send user message to GPT-3 API
      const botResponse = await getBotResponse(userMessage);

      // Update chat history with bot's response
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { sender: "bot", message: botResponse },
      ]);

      // Clear input field
      setUserMessage("");
    }
  };

  const getBotResponse = async (userMessage) => {
    const endpoint =
      "https://api.openai.com/v1/engines/davinci-codex/completions";
    const headers = {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    };

    const data = {
      prompt: userMessage,
      max_tokens: 100,
    };

    try {
      const response = await axios.post(endpoint, data, { headers });
      console.log("API Response:", response.data); // Debug logging
      return response.data.choices[0].text;
    } catch (error) {
      console.error("Error processing the user message:", error);
      console.log("Error response data:", error.response.data); // Log error response
      return "Oops, something went wrong. Please try again later.";
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="user-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={handleUserMessage}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
