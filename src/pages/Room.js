import React, { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "./config/firebase";
import { AuthContext } from "../AuthService";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";

const Room = () => {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    // onSnapshotは監視
    onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt")),
      (snapshot) => {
        console.log(snapshot.docs);
        const messages = snapshot.docs.map((doc) => {
          return doc.data();
        });

        setMessages(messages);
      }
    );
  }, []);

  const user = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "messages"), {
      content: value,
      user: user.displayName,
      createdAt: new Date(),
    });
  };

  console.log(user);

  return (
    <>
      <h1>Room</h1>
      <ul>
        {messages.map((message) => {
          return (
            <li>
              {message.user}:{message.content}
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit">送信</button>
      </form>
      <button
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </>
  );
};

export default Room;
