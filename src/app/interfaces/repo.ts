export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    html_url: string;
  };
  private: boolean;
  html_url: string;
  description: string;
  url: string;
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  language: string;
  master_branch: string;
  default_branch: string;
  score: number;
}
