function Button(props) {
	function handleEvent() {
		switch (props.type) {
			case 'create':
				props.onCreate();
				break;
			case 'cancel':
				props.onCancel();
				break;
			case 'save':
				props.onSave();
				break;
			case 'copy':
				props.onCopy();
				break;
		}
	}


	return (
		<button type={props.type} className={props.className} 
			title={props.title}
			onClick={handleEvent}
		>
			{props.name}
		</button>
	);
}

export default Button;
