import Image from "next/image";
import { Card, Carousel } from "flowbite-react";
import Flagtip from "@/components/Flagtip";
import ApartmentIcon from "@/components/Icon/ApartmentIcon";
import { IUnitAvailable } from "@/types/data";
import { moneyFormat } from "@/utils/strHelper";
import CircleIcon from "../Icon/Circle";
import { useState } from "react";

const ProductItem = ({ data }: { data: IUnitAvailable }) => {
	const [anonymized, setAnonymized] = useState(true);
	const renderContent = () => {
		const phoneNumberRegex = /\b(\d{4}) ?\d{4}\b/g;
		const anonymizedContent = anonymized
			? data.description.replace(phoneNumberRegex, `<span class='cursor-pointer'>$1XXXX</span>`)
			: data.description;

		return { __html: anonymizedContent };
	};

	return (
		<Card
			renderImage={() => {
				return (
					<div className="relative">
						<Flagtip height={32} className="absolute top-2 z-10 -left-2" label="launching soon" />

						<Carousel>
							{data.pic.map(img => (
								<div key={img} className="relative h-70">
									<Image src={img} fill alt={img} className="object-cover" />
								</div>
							))}
						</Carousel>
					</div>
				);
			}}
		>
			<div className="flex justify-between">
				<div className="flex gap-4 items-center">
					<div className="bg-blue-300 rounded-xl p-2">
						<ApartmentIcon />
					</div>
					<div>
						<h5 className="text-2xl font-bold mb-1 tracking-tight text-neutral-300">{data.title}</h5>
						<small className="text-neutral-100">{data.address}</small>
					</div>
				</div>

				<div>
					<span className="text-neutral-300 text-lg mb-1">
						{`${moneyFormat({ str: data.psf_min })} - ${moneyFormat({ str: data.psf_max })}`}
					</span>
					<small className="text-neutral-100 block">{data.subprice_label}</small>
				</div>
			</div>

			<div>
				<div className="flex items-center gap-1">
					<span>{data.project_type}</span>
					<CircleIcon height={2} width={2} className="bg-neutral-300" />
					<span>{data.year}</span>
					<CircleIcon height={2} width={2} className="bg-neutral-300" />
					<span>{data.ownership_type}</span>
				</div>

				<span className="text-neutral-300">{data.availabilities_label}</span>

				<details className="mt-3">
					<summary className="font-semibold text-end text-blue-600 cursor-pointer mb-1">See description</summary>
					<pre
						className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap"
						onClick={() => setAnonymized(!anonymized)}
						dangerouslySetInnerHTML={renderContent()}
					/>
				</details>
			</div>
		</Card>
	);
};

export default ProductItem;
