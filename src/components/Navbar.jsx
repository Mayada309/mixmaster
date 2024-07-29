import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/Navbar';

const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<NavLink
					to='/'
					className='logo'
				>
					MixMaster
				</NavLink>
				<div className="nav-links">
					<NavLink to='/' className='nav-link'>
						home
					</NavLink>
					<NavLink to='/about' className='nav-link'>
						about
					</NavLink>
					<NavLink to='/newsletter' className='nav-link'>
						newsletter
					</NavLink>
				</div>
			</div>
		</Wrapper>
	);
};


export default Navbar;