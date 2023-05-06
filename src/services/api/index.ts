import axios from "axios";

export const request = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        "secret-token": "33ae4096-c799-455e-8f84-3492d83af017"
    },
});