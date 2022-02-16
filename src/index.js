import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import axios from "axios";

const App = () => {
  const authors = [
    "Michael",
    "Sarah",
    "Daniel",
    "Jana",
    "Mark",
    "Rejean",
    "Malerie",
  ];

  function returnRandomAuthor() {
    let randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    return randomAuthor;
  }

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={returnRandomAuthor()}
          timeAgo="Today at 4:15PM"
          text="Great Job!"
          src={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={returnRandomAuthor()}
          timeAgo="Yesterday at 5:55PM"
          text="Loved the food!"
          src={faker.image.image()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={returnRandomAuthor()}
          timeAgo="Today at 2:46PM"
          text="It was ok I guess.."
          src={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
