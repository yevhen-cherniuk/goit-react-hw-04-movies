import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getReviewsInfo } from "../../services/fetchApi";

const Reviews = () => {
  const history = useHistory();
  console.log("cast", history);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsInfo(history.location.state.id).then((resp) =>
      setReviews(resp.data.results)
    );
  }, [history.location.state.id]);

  return (
    <>
      <h1>Reviews</h1>
      <ul>
        {reviews.length > 0 ? (
          <div>
         <ul className="Reviews">
           {reviews.map(({ author, content, id }) => (
            <li key={id} className="Reviews--item">
              <h4 className="title">Author: {author}</h4>
              <p className="text">{content}</p>
            </li>
          ))}
        </ul>
      </div>
        ) : (
          <div style={{ textAlign: "center" }}>
         <p>We don't have any review for this movie.</p>
       </div>
        )}
      </ul>
    </>
  );
};

export default Reviews;