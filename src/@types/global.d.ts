type TResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: Array<TPost>
}

type TPost = {
  id: string;
  content: string;
  username: string;
  title: string;
  created_datetime: string;
}

type TPayload = {
  username: string,
  title: string,
  content: string,
}