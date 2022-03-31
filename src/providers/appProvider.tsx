import { ReactNode, useState } from "react";
import { AppContext } from "../contexts/appContext"
import useLocalStorage from "../hooks/useLocalStorage";
import { getPostsService, deletePostService, editPostService } from "../services/postServices";

type TProps = {
  children: ReactNode;
}


export const AppProvider = ({ children }: TProps) => {
  const [posts, setPosts] = useState<TPost[]>([])
  const [user, setUser] = useLocalStorage("@codeleap:userID", "")

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const toggleDeleteModal = () => setIsDeleteModalOpen(!isDeleteModalOpen)
  const toggleEditModal = () => setIsEditModalOpen(!isEditModalOpen)
  const [postId, setPostId] = useState<string>('')


  const getPostId = (id: string) => setPostId(id)
  const fetchPosts = async () => {
    const data = await getPostsService()
    setPosts(data)
  }

  const getCurrentUser = (value: string) => {
    setUser(value)
  }

  const deletePost = async (id: string) => {
    await deletePostService(id)
    fetchPosts()
  }

  const editPost = async (post: Partial<TPayload>) => {
    await editPostService(post, String(postId))
    fetchPosts()
  }

  return <AppContext.Provider value={{
    posts,
    fetchPosts,
    user,
    getCurrentUser,
    isDeleteModalOpen,
    isEditModalOpen,
    toggleDeleteModal,
    toggleEditModal,
    deletePost,
    editPost,
    getPostId,
    postId
  }}>{children}</AppContext.Provider>
}