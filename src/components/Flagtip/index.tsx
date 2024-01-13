const Flagtip = ({
	label,
	fill = "#FF72B6",
	height = 21,
	className = "",
}: {
	label: string;
	className?: string;
	height?: number;
	fill?: string;
}) => {
	return (
		<div className={`flex items-center ${className}`}>
			<div className="bg-pink text-white p-1 uppercase font-semibold rounded-ss-md">{label}</div>
			<svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 9 21" fill="none">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 21H0.447242C1.06958 21 1.65645 20.7103 2.03491 20.2163L8.54367 11.72C9.09344 11.0023 9.09344 10.0051 8.54367 9.28744L2.03101 0.786051C1.65475 0.294901 1.07237 0.00554085 0.453671 0.00234413L0 0V21Z"
					fill={fill}
				/>
			</svg>
			<div className="bg-pink rounded-bl-md absolute bottom-0 left-0 transform translate-y-full">
				<span className="bg-pink-700 w-2 block h-2 rounded-l-md"></span>
			</div>
		</div>
	);
};

export default Flagtip;
