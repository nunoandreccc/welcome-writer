import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';


const view = (state, {dispatch, updateState}) => {
	
	return (
		<div>
            <nav className="navbar">
                <div className="logo">LOGO</div>
                <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" className="hamburger">&#9776;</label>
                <div className="menu">
                    <li><span className="notify-badge">NEW</span><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li className="services">
                    <a href="/">Services</a>
                    <ul className="dropdown">
                        <li><a href="/">Dropdown 1 </a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 2</a></li>
                        <li><a href="/">Dropdown 3</a></li>
                        <li><a href="/">Dropdown 4</a></li>
                    </ul>
                    </li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </div>
                </ul>
            </nav>			
		</div>
	);
};

createCustomElement('bmwag-navigation-menu', {
	renderer: {type: snabbdom},
	view,
	styles,
	initialState: {
		
	}
});