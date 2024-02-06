'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const NoteForm = ({ note }) => {
	const router = useRouter();
  const isEditing = note?._id ? true : false;
  const startingData = {
		title: '',
		description: '',
		priority: 1,
		status: 'Uncompleted',
	};

  if(isEditing) {
    startingData["title"] = note.title
    startingData["description"] = note.description 
    startingData["priority"] = note.priority 
    startingData["status"] = note.status
  }

	const [formData, setFormData] = useState(startingData);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((preState) => ({
			...preState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

    if (isEditing) {
      const res = await fetch(`/api/Notes/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update note");
      }
    }

    else {
      const res = await fetch('/api/Notes', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Failed to create a note');
      }
    }

    router.push('/');
		router.refresh();
	};

	return (
		<div className=" flex justify-center">
			<form
				onSubmit={handleSubmit}
				method="post"
				className="flex flex-col gap-3 w-1/2"
			>
				<label>Title</label>
				<input
					id="title"
					name="title"
					type="text"
					onChange={handleChange}
					required={true}
					value={formData.title}
				/>
				<label>Description</label>
				<textarea
					id="description"
					name="description"
					onChange={handleChange}
					required={true}
					value={formData.description}
					rows="5"
				/>

				<label>Priority</label>
				<div>
          <label>1</label>
					<input
						id="priority-1"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={1}
						checked={formData.priority == 1}
					/>
					<label>2</label>
					<input
						id="priority-2"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={2}
						checked={formData.priority == 2}
					/>
					<label>3</label>
					<input
						id="priority-3"
						name="priority"
						type="radio"
						onChange={handleChange}
						value={3}
						checked={formData.priority == 3}
					/>
				</div>
				<label>Status</label>
				<select name="status" value={formData.status} onChange={handleChange}>
					<option value="Completed">Completed</option>
					<option value="Uncompleted">Uncompleted</option>
				</select>
				<input type="submit" className="btn max-w-xs" value={isEditing ? "Edit Note" : "Create Note"} />
			</form>
		</div>
	);
};

export default NoteForm;
