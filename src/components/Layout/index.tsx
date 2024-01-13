import { PropsWithChildren } from "react";

const Layout = ({ children, className = "" }: PropsWithChildren<{ className?: string }>) => {
	return <div className={className}>{children}</div>;
};

export default Layout;
