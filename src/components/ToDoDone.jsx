import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoDone({ done, deleteTodo }) {
	return (
		<ul style={{ width: '100%', maxWidth: '900px', margin: '0 auto', marginTop: '40px' }}>
			{done.map(elem => {
				return (
					<li
						key={elem.id}
						style={{
							border: '1px solid rgba(25, 118, 210, 0.5)',
							borderRadius: '4px',
							minHeight: '80px',
							marginBottom: '10px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '0px 10px 0px 10px',
						}}
					>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ fontWeight: '700', fontSize: '24px', color: '#1976d2' }}>{elem.title}</div>
							<div style={{ fontWeight: '400', fontSize: '16px', color: '#1976d2' }}>{elem.descr}</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<DeleteIcon
								sx={{ height: '40px', width: '40px', cursor: 'pointer', '&:hover': { color: 'rgba(25, 118, 210, 0.7)' } }}
								color='primary'
								onClick={() => deleteTodo(elem.id)}
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
