import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/newsSlice";
import News from "./news";

const NewsList = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news.news);

  const newsStatus = useSelector((state) => state.news.newsStatus);

  const filterNews = news.length
    ? news.filter((newspaper) => newspaper.status === true)
    : [];

  useEffect(() => {
    if (newsStatus === "idle") dispatch(fetchNews());
  }, [dispatch, newsStatus]);

  const filteredNews = filterNews.filter((newspaper) => {
    const name =
      newspaper.name && typeof newspaper.name === "string"
        ? newspaper.name
        : "";

    const search =
      searchTerm && typeof searchTerm === "string" ? searchTerm : "";

    return name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <>
      <div className="list-new">
        {filteredNews.map((newspaper) => {
          return filteredNews.length ? (
            <>
              <News newspaper={newspaper} />
            </>
          ) : (
            <p>No news to display</p>
          );
        })}
      </div>
    </>
  );
};
export default NewsList;
