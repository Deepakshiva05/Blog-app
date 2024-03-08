// src/NewsComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   

const BlogApp = () => {


    const ApiKey='24f54d85ba9d4ee2844dd11875df75a2';

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=${ApiKey}`
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

      <div className='row grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 mt-10'>
        {news.map((article) => {
            return(
                <Card className="mt-6 w-96 shadow-lg hover:shadow-xl">
      <CardHeader color="blue-gray" className="relative h-54">
        <img
          src={article.urlToImage}
          alt="card-image"
          className='h-34'
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {article.title}
        </Typography>
        <Typography>
         
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
            )
           })}
      </div>
    </div>
  );
};

export default BlogApp;


// return(
            
//     <li key={article.url}>
//       <strong>Title:</strong> {article.title} <br />
//       <strong>Description:</strong> {article.description} <br />
//       <strong>Author:</strong> {article.author} <br />
//       <strong>Source:</strong> {article.source.name} <br />
//       <strong>URL:</strong> <a href={article.url}>{article.url}</a> <br />
//       <strong>Published At:</strong> {article.publishedAt} <br />
//       <strong>Content:</strong> {article.content}<strong> <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a></strong><br />
//       <strong>Image:</strong> <img src={article.urlToImage} alt="Article" width="100" height="100" /> <br />
//       <hr />
//     </li>
// )