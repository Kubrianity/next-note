"use client"

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

const DeleteIcon = ({id}) => {
  const router = useRouter();

  const handleDelete = async () => {

		const res = await fetch(`/api/Notes/${id}`, {
			method: 'DELETE'
		});
		if (!res.ok) {
			throw new Error('Failed to delete note');
		}
		router.refresh();
	};

	return <FontAwesomeIcon onClick={handleDelete} icon={faTrash} className="text-slate-700"/>;
};

export default DeleteIcon;
