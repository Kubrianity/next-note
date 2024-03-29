import DeleteIcon from './DeleteIcon';
import PriorityDisplay from './PriorityDisplay';
import StatusDisplay from './StatusDisplay';
import EditIcon from './EditIcon'

const NoteCard = ({note}) => {
	return (
		<div>
			<div className="flex flex-col hover:bg-card-hover bg-card rounded-md shadow-lg p-3 m-2 break-words">
				<div className="flex mb-3">
					<PriorityDisplay priority={note.priority} />
					<div className="ml-auto">
						<DeleteIcon id={note._id} />
					</div>
				</div>
        <div className="flex mt-1">
          <h4>{note.title}</h4>
          <div className="ml-auto">
            <EditIcon id={note._id} />
          </div>
        </div>
        <hr></hr>
        <p>{note.description}</p>
				<div className="flex-grow"></div>
				<div className="flex mt-2">
					<div className="ml-auto  flex items-end">
						<StatusDisplay status={note.status} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NoteCard;
