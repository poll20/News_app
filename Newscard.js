import React, { Component } from 'react'

export default class Newscard extends Component {

  

  
  render() {  
    let {title,dis,img,url,author,publisheddate}=this.props
    return (
      <div>
    
   <div className="container my-3">
        <div className="row">
  <img src={img?img:"https://facts.net/wp-content/uploads/2023/07/49-facts-about-coimbatore-1688360759.jpeg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{dis}...</p>
    <p className="card-text"><b>{author?author:"unknown"}</b> </p>
    <p className="card-text">{new Date(publisheddate).toUTCString ()} </p>
    <a href={url} className="btn btn-dark btn-sm ">Go somewhere</a>
     
  </div>
  
</div>

</div>

</div>
    )
  }
}
   