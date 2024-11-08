import { Link } from "react-router-dom";

const News = ({ newspaper }) => {
  return (
    <div key={newspaper.id} className="card col-md-3">
      <img
        src={newspaper.image}
        className="card-img-top"
        alt={newspaper.name}
      />
      <div className="card-body">
        <h4 className="card-title">{newspaper.name}</h4>
        <p>
          <i class="bi bi-calendar"></i> {newspaper.date}
        </p>
        <p className="card-text">{newspaper.description}</p>
        <div className="view-btn">
          <Link to={`/news/${newspaper.id}`}>
            <i class="bi bi-eye btn btn-primary"> View Details</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
