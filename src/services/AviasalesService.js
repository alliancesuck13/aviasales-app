export default class AviasalesService {
  API_BASE_URL = "https://aviasales-test-api.kata.academy/";

  getResource = async (url = "") => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    const result = await fetch(`${this.API_BASE_URL}${url}`, options);

    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, received ${result.status}`);
    }

    const response = await result.json();

    return response;
  };

  getSearchID() {
    return this.getResource("search")
      .then((response) => response)
      .catch((reason) => reason);
  }

  getPacketOfTickets(searchID = "") {
    return this.getResource(`tickets?searchId=${searchID}`)
      .then((response) => response)
      .catch((reason) => reason);
  }
}
