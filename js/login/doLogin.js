import { url } from "../setting/api.js";
import { saveToken, saveUser } from "../components/storage/localStorage.js";
import displayMessage from "../components/displayMessage.js";

export async function doLogin(username, password) {
	const loginUrl = url + "auth/login";

	const data = JSON.stringify({ email: username, password: password });

	const options = {
		method: "POST",
		body: data,
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(loginUrl, options);
		const json = await response.json();
		console.log(json.authentication.sessionToken
		);
		if (json.authentication) {
			saveToken(json.authentication.sessionToken);
			saveUser(json.authentication.password);
			location.href = "./edit.html";
		}

		if (json.error) {
			displayMessage(
				"message__error",
				"Invalid login details",
				".login__message"
			);
		}
	} catch (error) {
		console.log(error);
		displayMessage(
			"message__error",
			"Invalid login details",
			".login__message"
		);
	}
}
