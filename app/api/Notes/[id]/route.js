import NoteService from '../../../services/note-service'
import { NextResponse } from 'next/server'

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