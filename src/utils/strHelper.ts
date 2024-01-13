export const moneyFormat = ({ str, currency = "USD" }: { str: number; currency?: string }) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency,
		currencyDisplay: "narrowSymbol",
	}).format(str);
};

export const anonymizeStr = (str: string, howMuch = 4) => {
	return str.slice(0, howMuch * -1) + "X".repeat(howMuch);
};
