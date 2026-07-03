import React from "react";
function SubjectList({
    subjects,
    deleteSubject,
    toggleSubject,
}) {
    return (
        <div>
            {subjects.map((subject) => (
                <div key={subject.id}>
                    <h3>{subject.name} </h3>
                    <button
                        onClick={() =>
                            toggleSubject(subject.id)
                        }>
                        {subject.completed
                            ? "Completed"
                            : "Complete"}
                    </button>
                    <button
                        onClick={() =>
                            deleteSubject(subject.id)
                        }
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}
export default SubjectList;