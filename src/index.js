import ReactDOM from "react-dom";
// webpack finds .js files for you (without adding the extension)
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        avatar={faker.image.nightlife()} 
        author="Raul" 
        timeAgo="Today at 3:35PM" 
        content="Great work!" />
      <CommentDetail 
        avatar={faker.image.people()} 
        author="Rosario" 
        timeAgo="Today at 7:34PM" 
        content="Really awesome idea" />
      <CommentDetail 
        avatar={faker.image.city()} 
        author="Guadalupe" 
        timeAgo="Yesterdat at 9:54AM" 
        content="I don't agree..." />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));