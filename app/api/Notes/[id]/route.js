import NoteService from '../../../services/note-service'
import { NextResponse } from 'next/server'

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const data = await NoteService.find(id);
    return NextResponse.json({ data }, { status: 200 });
  }
  catch(err) {
    return NextResponse.json({message: "Failed to get note", err}, {status: 500})
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const noteData = body.formData;
    await NoteService.update(id, noteData);
    return NextResponse.json({ message: "Note updated" }, { status: 200 });
  } 
  catch (error) {
    return NextResponse.json({ message: "Failed to update note", error }, { status: 500 });
  }
}

export async function DELETE(req, {params}) {
  try {
    const {id} = params
    await NoteService.del(id)
    return NextResponse.json({message: "Note deleted"}, {status: 200})
  }
  catch(err) {
    return NextResponse.json({message: "Failed to delete note", err}, {status: 500})
  }
}
