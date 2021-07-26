export type Post = {
  postId: string;
  author: string;
  title: string;
  description: string;
  comments: [string];
  category: string;
  likeCount: number;
  dislikeCount: number;
  viewCount: number;
};
