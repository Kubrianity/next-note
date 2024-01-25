import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/noter');
mongoose.Promise = global.Promise;

const NoteSchema = new Schema(
	{
		title: String,
		description: String,
    status: String,
		priority: Number,
		active: Boolean,
	},
	{
		timestamps: true,
	}
);

const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema);
module.exports = Note;
