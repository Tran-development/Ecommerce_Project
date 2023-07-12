import React from 'react'
import { Link } from 'react-router-dom'
import pro1 from '../../assets/images/slider/slider1.jpg'
import pro2 from '../../assets/images/slider/slider2.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './HotDeals.scss'
const HotDeals = () => {
    return (
        <div className='hot-deal-products off-white-bg pb-90 pb-sm-50'>
            <div className="container">
                <div className="post-title pb-30">
                    <h2>hot deals</h2>
                </div>

                <div className="products">
                    <div className="product">
                        <div className="image">
                            <img src={pro1} />
                            <div className="countdown">
                                <div className="count">
                                    <p>00</p>
                                    <span>Days</span>
                                </div>
                                <div className="count">
                                    <p>00</p>
                                    <span>Hours</span>
                                </div>
                                <div className="count">
                                    <p>00</p>
                                    <span>Mins</span>
                                </div>
                                <div className="count">
                                    <p>00</p>
                                    <span>Secs</span>
                                </div>
                                {/* <Link>quick view</Link> */}
                            </div>
                        </div>
                        <div className="pro-content">
                        <div className="namePrice">
                            <h3>Earphone</h3>
                            <p><span>$ 15.99</span>
                            <del>$ 20.99</del></p>
                            <div className="label-product l-sale">
                                20
                                <span className='symbol'>%</span>
                            </div>
                        </div>
                        </div>

                        
                        {/* <div className="stars">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarHalfIcon />
                        </div> */}
                        {/* <div className="buy_now">
                            <button className='btn btn-warning'>Buy now</button>
                        </div> */}
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default HotDeals