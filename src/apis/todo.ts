const baseURL = "http://localhost:9999";

export async function createTodo(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const contents = formData.get("contents") as string;

  const newTodo = {
    id: `${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    title,
    contents,
    isDone: false,
    createDt: new Date().toISOString(),
    updateDt: "",
  };

  const response = await fetch(baseURL + "/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // JSON 데이터 전송을 명시
    },
    body: JSON.stringify(newTodo),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }
  const result = await response.json();
  return result;
}
