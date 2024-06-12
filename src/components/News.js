import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  articles = []

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`
  }

  async updateNews(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c7c233e5c37c4447b2254f32bc707d07&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  }

  handlePrevClick = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  }


  render() {
    return (
      <>
        <div className='container my-3'>
          <h2 className='text-center text-light'>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {this.state.loading && <Spin />}
          <hr />
          <div className='row'>
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 60) : ""}
                    description={element.description ? element.description.slice(0, 118) : ""}
                    url={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt}
                    source={element.source.name} />
                </div>
              )
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark"
              onClick={this.handlePrevClick}
            >&lt; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
              type="button" className="btn btn-dark"
              onClick={this.handleNextClick}
            >Next &gt;</button>
          </div>
        </div>
      </>
    )
  }
}

export default News;
