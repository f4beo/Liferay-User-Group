export interface UserData {
  id: number;
  username: string;
  profilePic: string;
}

export interface PostContent {
  id: number;
  userId: number;
  // date: Date;
  title: string;
  content: string;
  comments: number;
}
