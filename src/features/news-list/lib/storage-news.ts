import { INews } from '@/entities/form-news';

export const getNewsFromStorage = (): INews[] => {
  const news = localStorage.getItem('news');
  return news ? JSON.parse(news) : [];
};

export const saveNewsToStorage = (news: INews[]) => {
  localStorage.setItem('news', JSON.stringify(news));
};
