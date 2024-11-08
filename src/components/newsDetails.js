import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNew } from "../redux/newsSlice";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { newsId } = useParams();

  const dispatch = useDispatch();

  const newspaper = useSelector((state) => state.news.new);
  const newsStatus = useSelector((state) => state.news.newsStatus);

  useEffect(() => {
    if (newsStatus === "idle" || newsId) {
      dispatch(fetchNew({ newsId }));
    }
  }, [dispatch, newsStatus, newsId]);

  if (newsStatus === "loading") {
    return <p>Loading news...</p>;
  }

  if (newsStatus === "failed") {
    return <p>Failed to load news. Please try again later.</p>;
  }

  if (!newspaper) {
    return <p>No news found for the provided ID.</p>;
  }

  return (
    <div className="news-detail-container">
      {newspaper && (
        <>
          <h1>{newspaper.name}</h1>
          <img src={newspaper.image} alt={newspaper.name} />
          <p>{newspaper.description}</p>
        </>
      )}
    </div>
  );
};

export default NewsDetail;
