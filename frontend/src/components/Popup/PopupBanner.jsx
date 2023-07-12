import React from 'react'
import popupBanner from '../../assets/images/pop-banner.jpg'
import './PopupBanner.scss'
const PopupBanner = () => {
    return (
        <>
            {/* Banner Popup Start */}
            <div className="popup_banner">
                <span className="popup_off_banner">x</span>
                <div className="banner_popup_area">
                    <img src={popupBanner} />
                </div>
            </div>
            {/* Banner Popup End */}
        </>
    )
}

export default PopupBanner