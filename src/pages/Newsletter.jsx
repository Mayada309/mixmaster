import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {

	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await axios.post(newsletterUrl, data);
		toast.success(response.data.msg);
		return redirect('/');
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		return error;
	}


};

const Newsletter = () => {

	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Form className='form' method='POST'>
			<h4 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: '500' }} >
				our newsletter
			</h4>

			{/* name */}
			<div className="form-row">
				<label htmlFor="name" className='form-label'>
					first name
				</label>
				<input
					type="text"
					className='form-input'
					name='name'
					id='name'
					required
				/>
			</div>

			{/* lastName */}
			<div className="form-row">
				<label htmlFor="lastName" className='form-label'>
					last Name
				</label>
				<input
					type="text"
					className='form-input'
					name='lastName'
					id='lastName'
					required
				/>
			</div>

			{/* email */}
			<div className="form-row">
				<label htmlFor="email" className='form-label'>
					email
				</label>
				<input
					type="email"
					className='form-input'
					name='email'
					id='email'
					defaultValue='test@test.com'
					required
				/>
			</div>

			{/* submit */}
			<button
				type="submit"
				className='btn btn-block'
				disabled={isSubmitting}
				style={
					isSubmitting ? 
					{ background: '#047857', marginTop: '0.5rem' } 
					: 
					{ background: '#10b981', marginTop: '0.5rem' }}
			>
				{isSubmitting ? 'submitting' : 'submit'}
			</button>
		</Form>
	);
};

export default Newsletter;