import NoteCard from './(components)/NoteCard';

const Dashboard = () => {
	return (
		<main className="p-5">
			<div className="lg:grid grid-cols-2 xl:grid-cols-4">
				<NoteCard />
			</div>
		</main>
	);
};

export default Dashboard;
