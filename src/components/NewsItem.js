import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, url, newsUrl, author, publishedAt, source } = this.props;

    return (
      <>
        <div className="my-3 d-flex justify-content-center">
          <div className="card">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-dark">
              {source}
            </span>
            <img src={!url ? "https://images.moneycontrol.com/static-mcnews/2024/04/Blockchain_shutterstock_1894505215.png" : url}
              className="card-img-top" alt="news-img" />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-dark">
                By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small>
              </p>
              <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem;
