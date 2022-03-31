import { api } from "./api"


export const getPosts = async () => {
  const { data } = await api.get<TResponse>("/")
  return data.results
}

export const createPost = async (payload: TPayload) => {
  await api.post("/", payload)
}