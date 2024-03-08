import React from 'react';

const BlogDetail = () => {

    
    const ApiKey='24f54d85ba9d4ee2844dd11875df75a2';

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=apple&from=2024-03-07&to=2024-03-07&sortBy=popularity&apiKey=24f54d85ba9d4ee2844dd11875df75a2`
        );
        setNews(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };
 
    fetchData();
  }, []);

  
  return (
    <div>
      
    </div>
  );
}

export default BlogDetail;
