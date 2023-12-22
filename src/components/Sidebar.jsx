import React from 'react'
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Order } from '../assets/order.svg'
import { ReactComponent as Products } from '../assets/products.svg';
import { ReactComponent as Delivery } from '../assets/delivery.svg'
import { ReactComponent as Marketing } from '../assets/marketing.svg'
import { ReactComponent as Analytics } from '../assets/analytics.svg';
import { ReactComponent as Payouts } from '../assets/payouts.svg';
import { ReactComponent as Discounts } from '../assets/discounts.svg';
import { ReactComponent as Audience } from '../assets/audience.svg';
import { ReactComponent as Appearance } from '../assets/appearance.svg';
import { ReactComponent as Plugins } from '../assets/plugins.svg';
const Sidebar = () => {

    const arr = [
        { icon: <Home />, title: "Home" },
        { icon: <Order />, title: "Orders" },
        { icon: <Products />, title: "Products" },
        { icon: <Delivery />, title: "Delivery" },
        { icon: <Marketing />, title: "Marketing" },
        { icon: <Analytics />, title: "Analytics" },
        { icon: <Payouts />, title: "Payouts" },
        { icon: <Discounts />, title: "Discounts" },
        { icon: <Audience />, title: "Audience" },
        { icon: <Appearance />, title: "Appearance" },
        { icon: <Plugins />, title: "Plugins" }
    ]
    return (
        <aside>
            <div className="sidebar">
                <div className="user">
                    <div className="user__logo">
                        <img src="image.svg" alt="logo" />
                    </div>
                    <div className="user__details">
                        <div className="name">Nishyan</div>
                        <div className="store">Visit store</div>
                    </div>
                    <div className="user__dropdown">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <ul className="menu">
                    {
                        arr.map((li, i) => (

                            <li key={i+1} className={li.title === 'Payouts' ? 'menu-item menu-active' : 'menu-item'}>
                                <a class="menu-item__icon">
                                    {li.icon}
                                </a>
                                <div className="menu-item__text">{li.title}</div>

                            </li>
                        ))
                    }

                </ul>
                <div className="credits">
                    <div className="credits__icon">
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="mr12">
                            <rect width="36" height="36" rx="4" fill="white" fillOpacity="0.1"></rect>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.99995 9.79751C8.42319 9.79751 7.79995 10.3555 7.79995 11.2475V24.7475C7.79995 25.6395 8.42319 26.1975 8.99995 26.1975H27C27.5767 26.1975 28.2 25.6395 28.2 24.7475V21.8475H23C20.8737 21.8475 19.15 20.1238 19.15 17.9975C19.15 15.8712 20.8737 14.1475 23 14.1475H28.2V11.2475C28.2 10.3555 27.5767 9.79751 27 9.79751H8.99995ZM29.7999 14.1475V11.2475C29.7999 9.65423 28.6323 8.19751 27 8.19751H8.99995C7.36758 8.19751 6.19995 9.65423 6.19995 11.2475V24.7475C6.19995 26.3408 7.36758 27.7975 8.99995 27.7975H27C28.6323 27.7975 29.7999 26.3408 29.7999 24.7475V21.8475H29.85V14.1475H29.7999ZM22 17.9475C22 17.4781 22.3806 17.0975 22.85 17.0975H24.15C24.6194 17.0975 25 17.4781 25 17.9475C25 18.417 24.6194 18.7975 24.15 18.7975H22.85C22.3806 18.7975 22 18.417 22 17.9475ZM20.85 17.9975C20.85 16.8101 21.8126 15.8475 23 15.8475H28.15V20.1475H23C21.8126 20.1475 20.85 19.1849 20.85 17.9975Z"
                                fill="white"></path>
                        </svg>
                    </div>
                    <div className="credits__details">
                        <span>Available credits</span>
                        <span className="balance">222.10</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar


