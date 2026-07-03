import React, {useState,useReducer,useRef,useEffect,useMemo,useCallback,useContext,} from "react";
import { subjectReducer } from "../reducer/subjectReducer";
import { UserContext } from "../context/UserContext";
import SubjectList from "./SubjectList";
function Dashboard({ setPage }) {
  const {user} = useContext(UserContext);
  const [subjects, dispatch] = useReducer(
    subjectReducer,
    [],() => JSON.parse(localStorage.getItem("subjects")) || []);
  const [text, setText] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);
  const addSubject = useCallback(() => {
    if (!text.trim()) return;
    dispatch({
      type: "ADD",
      payload: text,
    });
    setText("");
    inputRef.current.focus();
  }, [text]);
  const deleteSubject = useCallback((id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }, []);
  const toggleSubject = useCallback((id) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  }, []);
  const stats = useMemo(() => {
    const total = subjects.length;
    const completed = subjects.filter(
      (subject) => subject.completed
    ).length;
    const pending = total - completed;
    return {
      total,
      completed,
      pending,
    };
  }, [subjects]);
  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Welcome {user?.name}</h3>
      <button onClick={() => setPage("profile")}>Profile</button>
      <br />
      <br />
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Subject"
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }/>
        <button onClick={addSubject}>
          Add
        </button>
      </div>
      <br />
      <h3>Total: {stats.total}</h3>
      <h3>Completed: {stats.completed}</h3>
      <h3>Pending: {stats.pending}</h3>
      <SubjectList
        subjects={subjects}
        deleteSubject={deleteSubject}
        toggleSubject={toggleSubject}/>
    </div>
  );
}
export default Dashboard;