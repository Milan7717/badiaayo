import React, { useEffect, useState } from 'react';

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
    source: {
        name: string;
    };
}

const NewsComponent: React.FC = () => {
    const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
    const [error, setError] = useState<string | null>(null);

    const API_KEY = "ad4b453afd7449e6a624fa0fd1f329f3"
    const API_URL = `https://newsapi.org/v2/everything?q=Nepal floods&apiKey=${API_KEY}`;
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error('Failed to fetch news');
                }

                const data = await response.json();
                setNewsArticles(data.articles || []);
            } catch (err: any) {
                setError(err.message || 'An error occurred while fetching news');
            }
        };

        fetchNews();
    }, []);

    return (
        <div className='w-full max-h-screen flex items-center  '>
        <div  className='absolute top-10 left-4 bg-white w-[22%] h-[80%] overflow-hidden' style={{ padding: '20px' }}>
            <h2 className='text-3xl font-bold'>News on Nepal Floods</h2>
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : newsArticles.length > 0 ? (
                <ul>
                    {newsArticles.map((article, index) => (
                        <li className='flex flex-col gap-2' key={index} style={{ marginBottom: '15px' }}>
                            <h3 className='font-medium'>{article.title}</h3>
                            <p>
                                <strong>Source:</strong> {article.source.name}
                            </p>
                            <p>
                                <strong>Published At:</strong> {new Date(article.publishedAt).toLocaleString()}
                            </p>
                            <p className='line-clamp-3'>{article.description}</p>
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                Read more
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading news...</p>
            )}
        </div>
        </div>
    );
};

export default NewsComponent;
