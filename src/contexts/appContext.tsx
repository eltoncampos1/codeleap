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
}

export const AppContext = createContext({} as TProps)
