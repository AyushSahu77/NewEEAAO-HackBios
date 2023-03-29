import React from 'react'


const NewsItems = (props) => {
let { title, description, imgurl, newsurl, author, date, source } = props;
    
return (
      <div>
        <div className="card" >
          <div>
            <span className="fw-normal badge rounded-pill bg-danger" style={{
              display:'flex' ,
              justifyContent : 'flex-end',
               position : 'absolute'}}>{source}</span>
        </div>
        <img src={imgurl ? imgurl : "https://static.euronews.com/articles/wires/870/43/8704324/1000x563_jjh3y.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 40)}...</h5>
          <p className="card-text">{description.slice(0, 80)}....</p>
          <p className='card-text'><small className='text-muted'>By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</small></p>
          <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
        </div>
      </div>
      </div >
    )
  
}

export default NewsItems