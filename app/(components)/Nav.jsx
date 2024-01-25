import { faFilePen, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className="flex justify-between bg-nav p-4">
			<div className="flex items-center space-x-4 ml-2">
				<Link href="/">
					<FontAwesomeIcon icon={faHome} className="icon" />
				</Link>
				<Link href="/NotePage">
					<FontAwesomeIcon icon={faFilePen} className="icon" />
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
