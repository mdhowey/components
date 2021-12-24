import ReactDOM from "react-dom";
// webpack finds .js files for you (without adding the extension)
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">

      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.nightlife()} 
          author="Raul" 
          timeAgo="Today at 3:35PM" 
          content="Great work!" 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.people()} 
          author="Rosario" 
          timeAgo="Today at 7:34PM" 
          content="Really awesome idea" 
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
          avatar={faker.image.city()} 
          author="Guadalupe" 
          timeAgo="Yesterdat at 9:54AM" 
          content="I don't agree..." 
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));