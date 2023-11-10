import React, { Component } from 'react'

export default class Newsitems extends Component {
    
    render() {
      let {title , description ,imageUrl,newsUrl , author , date,source} =  this.props;
    return (
      <div className='container my-3 '>        
            <div className="card" style={{width:"18rem"}}>
            <span className="badge  text-bg-danger">{source}</span>
            <img src={imageUrl} className="card-img-top" alt="..." style={{width:"287px",height:"200px"}}/>
            <div className="card-body">
             <h5 className="card-title">{title}</h5>
           <p className="card-text">{description}</p>
           <p className="card-text"> <small>updated by {!author?"unknow":author} on {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target="blank" className="btn btn-primary">Read this</a>
            </div>
               </div>
            </div>
            
           
        
     
    )
  }
}
