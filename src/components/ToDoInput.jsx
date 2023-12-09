import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

export default function ToDoInput() {
	const [todo, setTodo] = useState({
		title: '',
		descr: '',
	});

	const handleTitleChange = event => {
		setTodo({ ...todo, title: event.target.value });
		console.log(todo);
	};

	const handleDescrChange = event => {
		setTodo({ ...todo, descr: event.target.value });
		console.log(todo);
	};

	return (
		<Box
			sx={{
				width: '1000px',
				margin: '0 auto',
				marginTop: '40px',
			}}
		>
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TextField
					label='Create ToDo'
					sx={{
						width: '250px',
						marginRight: '10px',
					}}
					onChange={handleTitleChange}
					value={todo.title}
				/>
				<TextField
					label='Create Description'
					sx={{
						width: '250px',
						marginRight: '20px',
					}}
					onChange={handleDescrChange}
					value={todo.descr}
				/>
				<AddCircleIcon
					color='primary'
					sx={{ width: '40px', height: '40px' }}
				/>
			</Box>
		</Box>
	);
}
