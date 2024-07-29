import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCrad from './CocktailCard';

const CocktailList = ({ drinks }) => {

	if (!drinks) {
		return <h4 style={{ textAlign: 'center' }} >
			no matching cocktails found
		</h4>;
	}

	const formattedDrinks = drinks.map((item) => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass
		};
	});

	return (
		<Wrapper>
			{
				formattedDrinks.map((drink) => {
					return <CocktailCrad key={drink.id} {...drink} />;
				})
			}
		</Wrapper>
	);
};

export default CocktailList;