import React from "react";

export default ({ comments }) => {
  const renderedCommenta = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedCommenta}</ul>;
};
