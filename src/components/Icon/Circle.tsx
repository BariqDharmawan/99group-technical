const CircleIcon = ({ height, width, className = "" }: { className?: string; height: number; width: number }) => {
	return (
		<span
			className={`block rounded-full ${className}`}
			style={{
				height,
				width,
			}}
		></span>
	);
};

export default CircleIcon;
