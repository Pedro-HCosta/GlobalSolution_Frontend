const baseUrl = import.meta.env.VITE_API_URL

export async function apiGet(path: string) {
  const response = await fetch(baseUrl + path)
  return response.json()
}

export async function apiPost(path: string, body: unknown) {
  const response = await fetch(baseUrl + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  return response.json()
}

export async function apiPut(path: string, body: unknown) {
  const response = await fetch(baseUrl + path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  })
  return response.json()
}

export async function apiDelete(path: string) {
  const response = await fetch(baseUrl + path, {
    method: "DELETE"
  })
  return response.json()
}
