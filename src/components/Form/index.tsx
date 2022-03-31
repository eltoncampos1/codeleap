import { FormEvent, useEffect, useState } from 'react'
import { Button, FormGroup, Title } from '../'
import { useApp } from '../../hooks/useApp'
import { createPostService } from '../../services'
import * as S from './styles'

type TProps = {
  title?: string
  buttonText?: string;
  isEditModal?: boolean;
}

export const Form = ({ title, buttonText, isEditModal = false }: TProps) => {
  const { user, fetchPosts, editPost, toggleEditModal } = useApp()
  const initialData: TPayload = {
    title: "",
    content: "",
    username: user
  }

  const [formData, setFormData] = useState(initialData)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (isEditModal) {
      const { username, ...data } = formData
      await editPost(data)
      await fetchPosts()
      toggleEditModal()
    } else {
      createPostService(formData)
      setFormData(initialData)
      fetchPosts()
    }
  }

  return (
    <S.Container isEditModal={isEditModal} onSubmit={onSubmit}>
      <Title>{title ?? "What’s on your mind?"}</Title>
      <FormGroup value={formData.title} name="title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} label='title' />
      <FormGroup value={formData.content} name="content" onChange={(e) => setFormData({ ...formData, content: e.target.value })} fieldType="text-area" label='content' />
      <Button disabled={!formData.title || !formData.content} type='submit'>{buttonText ?? "CREATE"}</Button>
    </S.Container >
  )
}