import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function OurCard({date,title,id,img,decs}){
    return(
      <div>
        <img src={img} alt={title} />
        <p>{date}</p>
        <h1>{title}</h1>
        <p>{decs}</p>
        <Link to={id}>
        Read More
        </Link>
      </div>
      
    )
}

BlogCard.PropTypes ={
    img:PropTypes.img,
    title:PropTypes.string,
    decs:PropTypes.string,
    id:PropTypes.number,
    key:PropTypes.string,
    date:PropTypes.string,
};

