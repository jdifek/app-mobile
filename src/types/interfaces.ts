export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
  user_details: IUser;
}

export interface IUser {
  id: string;
  tgUsername: string;
  phoneNumber: string;
  coins: number;
  rank: string;
  profilePic: string;
  email: string;
  role: string;
  tier: string;
  enabled: boolean;
  username: string;
}
