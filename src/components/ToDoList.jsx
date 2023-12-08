import { Box, Button } from '@mui/material';
import ToDo from './ToDo';
import { NavLink, Route, Routes } from 'react-router-dom';
import ToDoDone from './ToDoDone';
import { useState } from 'react';

export default function ToDoList() {
	const [activeBtn, setActiveBtn] = useState('/');

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
				<NavLink to='/'>
					<Button
						variant='outlined'
						size='large'
						sx={{
							marginRight: '5px',
							backgroundColor: activeBtn === '/' ? 'rgba(25, 118, 210, 0.5)' : '',
						}}
						onClick={() => setActiveBtn('/')}
					>
						To Do
					</Button>
				</NavLink>
				<NavLink to='/done'>
					<Button
						variant='outlined'
						size='large'
						onClick={() => setActiveBtn('/done')}
						sx={{
							backgroundColor: activeBtn === '/done' ? 'rgba(25, 118, 210, 0.5)' : '',
						}}
					>
						Done
					</Button>
				</NavLink>
			</div>
			<Routes>
				<Route
					path='/'
					element={<ToDo />}
				/>
				<Route
					path='/done'
					element={<ToDoDone />}
				/>
			</Routes>
		</Box>
	);
}
