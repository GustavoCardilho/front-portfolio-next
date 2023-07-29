"use client";

import {
  ReactNode,
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

interface IRepositoriesGithub {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: Owner;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
}

interface RepositoriesGithubContext {
  repositoriesGithub: IRepositoriesGithub | undefined;
  setRepositoriesGithub: Dispatch<
    SetStateAction<IRepositoriesGithub | undefined>
  >;
}

const RepositoriesGithubContext = createContext({} as any);

export const useEquipmentEdit = () => {
  return useContext(RepositoriesGithubContext);
};

export const RepositoriesGithubProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [item, setItem] = useState<IRepositoriesGithub | undefined>();

  return (
    <RepositoriesGithubContext.Provider value={{ item, setItem }}>
      {children}
    </RepositoriesGithubContext.Provider>
  );
};
