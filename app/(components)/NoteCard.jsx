import DeleteIcon from './DeleteIcon';
import PriorityDisplay from './PriorityDisplay';
import StatusDisplay from './StatusDisplay';

const NoteCard = () => {
	return (
		<div>
			<div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2">
				<div className="flex mb-3">
					<PriorityDisplay />
					<div className="ml-auto">
						<DeleteIcon />
					</div>
				</div>
        <h4>Note Title</h4>
        <hr></hr>
        <p>This is a note description</p>
				<div className="flex-grow"></div>
				<div className="flex mt-2">
					<div className="ml-auto  flex items-end">
						<StatusDisplay />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NoteCard;
