import Layout from "@/components/Layout";
import ProductItem from "@/components/ProductItem";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import { Spinner } from "flowbite-react";

export default function Home() {
	const { data: unitAvailable, isLoading } = useSWR("/mock-api.json", fetcher);

	return (
		<Layout className="p-3">
			<div className="container mx-auto">
				{isLoading ? (
					<Spinner aria-label="spinner data" />
				) : (
					<div className="max-w-xl">
						<ProductItem data={unitAvailable} />
					</div>
				)}
			</div>
		</Layout>
	);
}
