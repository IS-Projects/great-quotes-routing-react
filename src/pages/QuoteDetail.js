import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <div>
      <p>Quote Detail</p>
      <p>{params.quoteid}</p>
      <Route path="/quotes/:quoteid/comments">
        <p>comments</p>
      </Route>
    </div>
  );
};

export default QuoteDetail;
