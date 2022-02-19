import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <p>Quote Detail</p>
      <p>{params.quoteid}</p>
      <Route path="/quotes/:quoteid/comments">
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
