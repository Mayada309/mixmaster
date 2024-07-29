import axios from 'axios';
import { Link, useLoaderData, Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';

const singleCocktailUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const singleCocktailQuery = (id) => {
	return {
		queryKey: ['cocktail', id],
		queryFn: async () => {
			const { data } = await axios.get(`${singleCocktailUrl}${id}`);
			console.log(data);
			return data;
		},
	};
};

export const loader = (queryClient) => async ({ params }) => {
	const { id } = params;
	await queryClient.ensureQueryData(singleCocktailQuery(id));
	return { id };
};
const Cocktail = () => {
	const { id } = useLoaderData();

	const { data } = useQuery(singleCocktailQuery(id));
	console.log(data);

	if (!data.drinks) return <Navigate to='/' />;

	const singleDrink = data.drinks[0];
	const {
		strDrink: name,
		strDrinkThumb: image,
		strAlcoholic: info,
		strCategory: category,
		strGlass: glass,
		strInstructions: instructions,
	} = singleDrink;

	const keys = Object.keys(singleDrink).filter((key) => key.includes(`strIngredient`) && singleDrink[key] !== null);
	const ingredients = keys.map((key) => {
		return singleDrink[key];
	});
	console.log(ingredients);

	return (
		<Wrapper>
			<header>
				<Link to='/' className='btn' >
					back home
				</Link>
				<h3>
					{name}
				</h3>
			</header>
			<div className="drink">
				<img src={image} alt={name} className='img' />
				<div className="drink-info">
					{/* name */}
					<p>
						<span className='drink-data'>name</span>
						{name}
					</p>

					{/* category */}
					<p>
						<span className='drink-data'>category</span>
						{category}
					</p>

					{/* info */}
					<p>
						<span className='drink-data'>info</span>
						{info}
					</p>

					{/* glass */}
					<p>
						<span className='drink-data'>glass</span>
						{glass}
					</p>

					{/* ingredients */}
					<p>
						<span className='drink-data'>ingredients</span>
						{ingredients.map((ing, index) => {
							return <span className='ing' key={index} >
								{ing}{index < keys.length - 1 ? ',' : '.'}
							</span>;
						})}
					</p>

					{/* insructions */}
					<p>
						<span className='drink-data'>instructions</span>
						{instructions}
					</p>

				</div>
			</div>
		</Wrapper>
	);
};

export default Cocktail;