import axios from "axios";
export const api = axios.create({
	baseURL: "http://localhost:2020",
});

export const teste = async () => {
	return api.get("/teste");
};
