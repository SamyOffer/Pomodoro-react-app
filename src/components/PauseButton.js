import React from "react";

function PauseButton(props) {
  return (
    <button style={{
        backgroundColor: "transparent",
        color: '#EEEEEE',
        border :0,
        display : "inline block",
        width : "25%",
        marginTop : "20px",
        cursor: "pointer",
        }
    } {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg>
    </button>
  );
}

export default PauseButton;
