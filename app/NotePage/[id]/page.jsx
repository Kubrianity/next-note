import NoteForm from "../../(components)/NoteForm"

const getNote = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Notes/${id}`, {
      method: 'GET',
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }
    return res.json();
  } 
  catch (error) {
    console.log(error);
  }
}

const NotePage = async ({ params }) => {

  const isEditing = params.id != "new" ? true: false

  if(isEditing) {
    const res = await getNote(params.id)
    var note = res.data
  }

  return (
    <NoteForm note={note} />
  )
}

export default NotePage