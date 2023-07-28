import React, { createContext, useContext, useState } from "react";
import { APIC } from "../utils/consts";
import axios from "axios";
import { notify } from "../components/Toastify";

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
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function addComment(obj) {
    try {
      await axios.post(APIC, obj);
      getComments();
      notify("Comment added successfully");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }

  async function deleteComment(id) {
    try {
      await axios.delete(`${APIC}/${id}`);
      getComments();
      notify("Successfully deleted");
    } catch (e) {
      notify(`${e.response.status}: ${e.response.statusText}`, "error");
    }
  }
  const value = { review, getComments, addComment, deleteComment };
  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
