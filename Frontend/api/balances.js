// Constants
import URL from "../constants/Url";

export async function balanceApi(amount=0) {
  try {
    const url = `${URL.API_BASE}/api/balances?amount=${amount}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}