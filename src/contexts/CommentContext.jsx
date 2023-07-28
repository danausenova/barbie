import React, { createContext, useContext, useState } from "react";
import { APIC } from "../utils/consts";
import axios from "axios";

const commentContext = createContext();
export function useCommentContext() {
  return useContext(commentContext);
}
const CommentContext = ({ children }) => {
  const [review, setReview] = useState([]);

  async function getComments() {
    try {
      const { data } = await axios(APIC);
      setReview(data);
    } catch (e) {
      console.log(e);
    }
  }

  async function addComment(obj) {
    try {
      await axios.post(APIC, obj);
      getComments();
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteComment(id) {
    try {
      await axios.delete(`${APIC}/${id}`);
      getComments();
    } catch (e) {
      console.log(e);
    }
  }
  const value = { review, getComments, addComment, deleteComment };
  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
