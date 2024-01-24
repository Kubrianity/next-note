import NoteCard from './(components)/NoteCard';

const getNotes = async() => {
  try {
    const res = await fetch("http://localhost:3000/api/Notes", {
      cache: "no-store"
    })
    return res.json();
  }
  catch(err) {
    console.log("Failed to get notes", err)
  }
}
const Dashboard = async () => {
  const {notes} = await getNotes()
	return (
		<main className="p-5">
			<div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {notes.map((note, index) => (
          <NoteCard key={index} id={index} note={note} />)
        )}
			</div>
		</main>
	);
};

export default Dashboard;
