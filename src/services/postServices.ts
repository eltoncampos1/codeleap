import { api } from "./api"


export const getPostsService = async () => {
  const { data } = await api.get<TResponse>("/")
  return data.results
}

export const createPostService = async (payload: TPayload) => {
  await api.post("/", payload)
}

export const editPostService = async (payload: Partial<TPayload>, post_id: string) => {
  await api.patch(`/${post_id}`, payload)
}

export const deletePostService = async (post_id: string) => {
  await api.delete(`/${post_id}`)
}