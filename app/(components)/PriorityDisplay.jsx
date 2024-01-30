import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PriorityDisplay = ({priority}) => {
	return (
		<div className="flex justify-start align-baseline text-slate-700">
      <p className="font-medium">Priority: </p>
			<FontAwesomeIcon icon={faStar} className={`${priority > 0 ? "text-slate-700" : "text-default-text"}`} />
			<FontAwesomeIcon icon={faStar} className={`${priority > 1 ? "text-slate-700" : "text-default-text"}`} />
			<FontAwesomeIcon icon={faStar} className={`${priority > 2 ? "text-slate-700" : "text-default-text"}`} />
		</div>
	);
};

export default PriorityDisplay;
