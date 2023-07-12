import React, { useState } from 'react'
import './Slider.scss'
import SideBar from '../SideBar/SideBar'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import slider1 from '../../assets/images/slider/slider1.jpg'
import slider2 from '../../assets/images/slider/slider2.jpg'
import slider3 from '../../assets/images/slider/slider3.jpg'
import slider4 from '../../assets/images/slider/slider4.jpg'
import slider5 from '../../assets/images/slider/slider5.jpg'
import { Link } from 'react-router-dom';

const Slider = () => {

    const [currSlide, setCurrSLider] = useState(0)

    const data = [
        slider1, slider2, slider3, slider4, slider5
    ]

    const prevSlider = () => {
        setCurrSLider(currSlide === 0 ? 2 : (prev) => prev -1)
        console.log(currSlide);
    }

    const nextSlider = () => {
        setCurrSLider(currSlide === 2 ? 0 : (prev) => prev + 1)
        console.log('next slide ', currSlide);
    }

    return (
        <div className='container'>
            <div className="col-xl-3 col-lg-4 d-none d-lg-block side_bar">
                <SideBar />
            </div>
            <div className="col-xl-9 col-lg-8 slider_box">
                <div className="slider-wrapper theme-default">
                    <div className="nivoSLider" style={{transform: `translateX(-${currSlide * 100}vw)`}}>
                        <Link className='link_slider' to='/'><img src={data[0]} alt='' /></Link>
                        <Link className='link_slider' to='/'><img src={data[1]} /></Link>
                        <Link className='link_slider' to='/'><img src={data[2]} alt='' /></Link>
                       <div className="icons">
                            <div className="icon-left" onClick={prevSlider}>
                                <WestIcon />
                            </div>
                            <div className="icon-right" onClick={nextSlider}>
                                <EastIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider