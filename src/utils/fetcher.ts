import axios from "axios";

const fetcher = (url: string) => axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/${url}`).then(res => res.data);

export default fetcher;
