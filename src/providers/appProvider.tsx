import { ReactNode, useState } from "react";
import { AppContext } from "../contexts/appContext"
import useLocalStorage from "../hooks/useLocalStorage";
import { getPosts } from "../services/postServices";

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

  const fetchPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  const getCurrentUser = (value: string) => {
    setUser(value)
  }

  return <AppContext.Provider value={{
    posts,
    fetchPosts,
    user,
    getCurrentUser,
    isDeleteModalOpen,
    isEditModalOpen,
    toggleDeleteModal,
    toggleEditModal
  }}>{children}</AppContext.Provider>
}