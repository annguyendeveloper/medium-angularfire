import { Tag } from './tag';

export interface Post {
  id: string;
  title: string;
  content: string;
  favourite: boolean;
  user_id: string;
  time: string;
  tags: Tag[];
}
