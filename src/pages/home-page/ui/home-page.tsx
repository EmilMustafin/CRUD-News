import { useEffect, useState } from 'react';
import { INews } from '@/entities/form-news';
import { getNewsFromStorage, NewsControl } from '@/features/news-list';
import styles from './home-page.module.scss';
import { mockNews } from '../model/constants';

export const HomePage = () => {
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    const storedNews = getNewsFromStorage();
    setNews(storedNews.length ? storedNews : mockNews);
  }, []);


  return (
    <div className={styles.homePageContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Latest News</h1>
        <p className={styles.introText}>
          Stay updated with the latest headlines and news stories. Here you can find the most recent
          updates on various topics. Feel free to explore, edit, or add your own news articles.
        </p>
      </header>
      {!news.length ? 'News not found' : <NewsControl news={news} setNews={setNews} />}
    </div>
  );
};
