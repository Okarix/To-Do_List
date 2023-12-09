import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function ToDoInput({ todo, setTodo, addTodo }) {
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
					onChange={event => setTodo({ ...todo, title: event.target.value })}
					value={todo.title ?? ''}
				/>
				<TextField
					label='Create Description'
					sx={{
						width: '250px',
						marginRight: '20px',
					}}
					onChange={event => setTodo({ ...todo, descr: event.target.value })}
					value={todo.descr ?? ''}
				/>
				<AddCircleIcon
					color='primary'
					sx={{ width: '40px', height: '40px', cursor: 'pointer', '&:hover': { color: 'rgba(25, 118, 210, 0.7)' } }}
					onClick={() => addTodo()}
				/>
			</Box>
		</Box>
	);
}
