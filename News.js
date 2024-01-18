import React, { Component } from 'react'
import Newscard from './Newscard'
import Loading from './Loading';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
export default class News extends Component {
     constructor() {
    super();
    console.log("this is constructor");
    this.state = {
      articles: [],
      load: false,
      page: 1,
      country:"in",
    pageSize:5,
    


    }
  }
  

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=741fa18f2c8c497390054e6d0029d446&pageSize=${this.state.pageSize}`
    this.setState({ load: true })
    let data = await fetch(url)
    let parsdata = await data.json()
    this.setState({ articles: parsdata.articles, totalResults: parsdata.totalResults, load: false })
  }
  prevbtn = async () => {
    console.log("prev btn")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=741fa18f2c8c497390054e6d0029d446&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`
    this.setState({ load: true })
    let data = await fetch(url)
    let parsdata = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsdata.articles,
      load: false
    })
  }
  nextbtn = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 5)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=741fa18f2c8c497390054e6d0029d446&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`
      this.setState({ load: true })
      let data = await fetch(url)
      let parsdata = await data.json()
      this.setState({
        page: this.state.page + 1,
        articles: parsdata.articles,
        load: false
      })
    }
  }
  render() {
    
    return (
      <div>
       
    
        {this.state.load && <Loading />}
        <h1 className='container'>top headline</h1>

        <div className="container my-3">
          <div className="row">
            {(!this.state.load) && this.state.articles.map((element) => {
              return <div className="col mid-6">
                 <Newscard url={element.url} title={element.title ? element.title.slice(0, 20) : ""} dis={element.description ? element.description.slice(0, 60) : ""} img={element.urlToImage} author={element.author} publisheddate={element.publishedAt} />
                </div>
            })}

          </div>
        </div>

        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-dark" type="button" onClick={this.prevbtn}>&larr; preveious</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 5)} className="btn btn-dark" type="button" onClick={this.nextbtn}>next &rarr;</button>
        </div>
        
      </div>
    )
  }
}
