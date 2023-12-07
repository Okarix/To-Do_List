import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDo() {
	return (
		<ul style={{ width: '100%', maxWidth: '900px', margin: '0 auto', marginTop: '40px' }}>
			{[0, 1, 2, , 4, 5].map(value => {
				return (
					<li
						key={value}
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
							<div style={{ fontWeight: '700', fontSize: '24px', color: '#1976d2' }}> {`ToDo ${value + 1}`}</div>
							<div style={{ fontWeight: '400', fontSize: '16px', color: '#1976d2' }}>Something</div>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<CheckCircleIcon
								sx={{ height: '40px', width: '40px' }}
								color='primary'
							/>
							<DeleteIcon
								sx={{ height: '40px', width: '40px' }}
								color='primary'
							/>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
