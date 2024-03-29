import NoteService from '../../services/note-service'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const notes = await NoteService.findAll()
    return NextResponse.json({notes}, {status: 200})
  }
  catch(err) {
    return NextResponse.json({message: "Failed to get notes", err}, {status: 500})
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const note = body.formData
    await NoteService.add(note)
    return NextResponse.json({message: "Note created"}, {status: 201})
  }
  catch(err) {
    return NextResponse.json({message: "Failed to create a note", err}, {status: 500})
  }
}
