import "./index.css";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import axios from "axios";

const socket = io("http://localhost:3000");

const Chat = () => {
  axios
    .get("http://localhost:3000")
    .then((res) => console.log(res))
    .catch((err) => console.log(`There was an err: ${err}`));

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  //  I want to write a function that get the value from input and emt it to the server
  //  then the server will emit it to the other client
  const handleSendMessage = () => {
    socket.emit("sendMessage", message);
  };

  useEffect(() => {
    socket.on("emitMessage", (message) => {
      setMessages([...messages, message]);
    }),
      [messages];
  });

  return (
    <div className='chat-page'>
      {/* nav bar */}
      <div className='nav-bar'>
        <h1 className='logo'>TaChat</h1>
        <div className='user-info'>
          <p>Thang Ta</p>
          <button>Log Out</button>
        </div>
      </div>
      {/* chat body */}
      <div className='chat-body'>
        {/* convos list */}
        <div className='conv-search'>
          <div className='conv-nav'>
            <input type='search' placeholder='Search conversations' />
            <button> + </button>
          </div>
          <div>
            <ul>
              <li>Convo 1</li>
              <li>Convo 2</li>
              <li>Convo 3</li>
              <li>Convo 4</li>
              <li>Convo 5</li>
            </ul>
          </div>
        </div>
        {/* chatbox */}
        <div className='chat-box'>
          <div className='receiver-info'>
            <h1>Thang Ta</h1>
            <div className='status'></div>
            <small>Online</small>
          </div>
          <div className='chat-messages'>
            {messages.map((message, index) => {
              return (
                <p key={index} className='receive-message'>
                  {`${socket.id}: ${message}`}
                </p>
              );
            })}
          </div>
          <div className='type-box'>
            <input type='text' onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
        {/* friend search */}
        <div className='friend-search'>
          <div className='search'>
            <input type='search' />
            <button>Search</button>
          </div>
          {/* result list */}
          <ul>
            <li>friend 1</li>
            <li>friend 1</li>
            <li>friend 1</li>
            <li>friend 1</li>
            <li>friend 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chat;
