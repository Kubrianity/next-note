import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from "next/link";

const EditIcon = ({id}) => {
	return (
    <Link href={`/NotePage/${id}`}>
      <FontAwesomeIcon icon={faPen} className="text-slate-700 btn"/>
    </Link>
  )
};

export default EditIcon;
