import { Box, Button } from '@mui/material';
import ToDo from './ToDo';

export default function ToDoList() {
	return (
		<Box
			sx={{
				width: '1000px',
				minHeight: '500px',
				margin: '0 auto',
				marginTop: '40px',
				marginBottom: '50px',
				backgroundColor: 'rgba(24,118,210, 0.45)',
				boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
				borderRadius: '4px',
				padding: '20px 0px 60px 0px',
			}}
			color='primary'
		>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Button
					variant='outlined'
					size='large'
					sx={{
						marginRight: '5px',
					}}
				>
					To Do
				</Button>
				<Button
					variant='outlined'
					size='large'
					sx={{}}
				>
					Done
				</Button>
			</div>
			<ToDo />
		</Box>
	);
}
