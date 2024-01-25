import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PriorityDisplay = () => {
	return (
		<div className="flex justify-start align-baseline text-slate-700">
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
			<FontAwesomeIcon icon={faStar} />
		</div>
	);
};

export default PriorityDisplay;
