const baseURL = "http://localhost:9999";

// 공통된 fetch 요청 처리
export async function fetchUtil(
  url: string,
  options: RequestInit = {}
): Promise<any> {
  try {
    const response = await fetch(baseURL + url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    if (!response.ok) {
      console.error("Network response was not ok:", response.statusText);
      throw new Error(`Error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
