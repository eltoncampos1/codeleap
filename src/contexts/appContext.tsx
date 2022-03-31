import { createContext, FormEventHandler } from "react";

type TProps = {
  posts: TPost[];
  fetchPosts: () => Promise<void>;
  user: string;
  getCurrentUser: (value: string) => void;
  isDeleteModalOpen: boolean;
  isEditModalOpen: boolean;
  toggleDeleteModal: () => void;
  toggleEditModal: () => void;
  deletePost: (id: string) => Promise<void>
  editPost: (post: Partial<TPayload>) => Promise<void>
  getPostId: (id: string) => void
  postId: string
}

export const AppContext = createContext({} as TProps)
