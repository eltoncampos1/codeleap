import { FormEvent, useEffect, useState } from 'react'
import { Button, FormGroup, Title } from '../'
import { useApp } from '../../hooks/useApp'
import { createPost } from '../../services'
import * as S from './styles'

export const Form = () => {
  const { user, fetchPosts } = useApp()
  const initialData: TPayload = {
    title: "",
    content: "",
    username: user
  }

  const [formData, setFormData] = useState(initialData)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    createPost(formData)
    setFormData(initialData)
    fetchPosts()
  }

  return (
    <S.Container onSubmit={onSubmit}>
      <Title>What’s on your mind?</Title>
      <FormGroup value={formData.title} name="title" onChange={(e) => setFormData({ ...formData, title: e.target.value })} label='title' />
      <FormGroup value={formData.content} name="content" onChange={(e) => setFormData({ ...formData, content: e.target.value })} fieldType="text-area" label='content' />
      <Button type='submit'>CREATE</Button>
    </S.Container>
  )
}