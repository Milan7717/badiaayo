import React, { useEffect, useState } from "react";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const newsApi = [
  {
    source: {
      id: "business-insider",
      name: "Business Insider",
    },
    author: "Insider Inc.",
    title:
      "Climate Action 15: 2024's top global innovators powering green solutions",
    description:
      "Climate Action 15 profiles top founders, global activists, academics, and nonprofit and public-sector leaders tackling climate solutions.",
    url: "https://www.businessinsider.com/climate-action-15-global-leaders-innovating-climate-solutions-2024-11",
    urlToImage:
      "https://i.insider.com/672e5266192f5258985704e4?width=1200&format=jpeg",
    publishedAt: "2024-11-11T16:18:38Z",
    content:
      "Timo Lenzen for BI\r\nThe climate crisis is having profound effects across the globe, from more intense heat waves and drought to catastrophic floods and wildfires.Solving the crisis requires aggressiv… [+38524 chars]",
  },
  {
    source: {
      id: null,
      name: "Yahoo Entertainment",
    },
    author: "AFP",
    title: "Climate change worsened deadly Nepal floods, scientists say",
    description:
      "Climate change, along with rapid urbanisation and deforestation, turbocharged floods in Nepal that killed more than 240 people last month, scientists said on...",
    url: "https://www.yahoo.com/news/climate-change-worsened-deadly-nepal-215621267.html",
    urlToImage:
      "https://media.zenfs.com/en/afp.com/aa8fb9b4831e10c50ca399f8686207e6",
    publishedAt: "2024-10-16T21:56:21Z",
    content:
      "Climate change, along with rapid urbanisation and deforestation, turbocharged floods in Nepal that killed more than 240 people last month, scientists said on Thursday.\r\nNepal suffered its worst flood… [+2824 chars]",
  },
  {
    source: {
      id: null,
      name: "Insurance Journal",
    },
    author: "Admin",
    title:
      "Multiple Climate Disasters Trigger First-Ever Red Cross Disaster Insurance Pay-Out",
    description:
      "The world was hit by so many floods and landslides in 2024 that it triggered the aid sector’s first multi-disaster insurance pay-out, the Red Cross told Reuters, signaling both the scale of the problem and the need for new financing …",
    url: "https://www.insurancejournal.com/news/international/2024/11/08/800645.htm",
    urlToImage:
      "https://www.insurancejournal.com/app/uploads/2024/09/flood-triggered-by-typhoon-yagi-submerges-houses-AP-scaled.jpg",
    publishedAt: "2024-11-08T17:23:28Z",
    content:
      "The world was hit by so many floods and landslides in 2024 that it triggered the aid sector’s first multi-disaster insurance pay-out, the Red Cross told Reuters, signaling both the scale of the probl… [+2300 chars]",
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-11-07T11:27:37Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-11-14T05:18:14Z",
    content: "[Removed]",
  },
  {
    source: {
      id: null,
      name: "Thehillstimes.in",
    },
    author: "The Hills Times",
    title:
      "Human induced climate change made Nepal rains more intense, scientists say",
    description:
      "By Shirish B Pradhan Kathmandu, Oct 17 (PTI) The late September floods that killed more than 240 people in Nepal were driven by rainfall made about 10 per cent more intense by human-caused climate change, a rapid analysis by a team of leading scientists said …",
    url: "https://thehillstimes.in/international/human-induced-climate-change-made-nepal-rains-more-intense-scientists-say",
    urlToImage: null,
    publishedAt: "2024-10-17T19:05:00Z",
    content:
      "By Shirish B Pradhan\r\nKathmandu, Oct 17 (PTI) The late September floods that killed more than 240 people in Nepal were driven by rainfall made about 10 per cent more intense by human-caused climate c… [+2977 chars]",
  },
  {
    source: {
      id: null,
      name: "BusinessLine",
    },
    author: "Vinson Kurian",
    title:
      "Run-up to COP29: Climate induced loss and damage to agri-food systems cries for attention",
    description:
      "Protecting small farmers from climate-induced loss and damage through innovative solutions like AgriStack and transformative adaptation measures.",
    url: "https://www.thehindubusinessline.com/economy/agri-business/run-up-to-cop29-climate-induced-loss-and-damage-to-agri-food-systems-cries-for-attention/article68768034.ece",
    urlToImage:
      "https://bl-i.thgim.com/public/incoming/5gcc6d/article68768011.ece/alternates/LANDSCAPE_1200/Bihar%20floods.jpg",
    publishedAt: "2024-10-18T07:43:36Z",
    content:
      "Small and marginal farmers are key stakeholders agri-food systems increasingly at risk from climate induced loss and damage. While agri-food is gradually integrating into global value chains, farmers… [+3275 chars]",
  },
  {
    source: {
      id: null,
      name: "VOA News",
    },
    author: "webdesk@voanews.com (Associated Press)",
    title: "For 3rd straight year, no improvement in Earth's projected warming",
    description:
      "BAKU, Azerbaijan — For the third straight year, efforts to fight climate change haven't lowered projections for how hot the world is likely to get — and recent developments in China and the United States are likely to slightly worsen the outlook, according to…",
    url: "https://www.voanews.com/a/for-3rd-straight-year-no-improvement-in-earth-s-projected-warming/7863515.html",
    urlToImage:
      "https://gdb.voanews.com/8B4973E0-7FEA-4C86-966D-A17C0D75B863.jpg",
    publishedAt: "2024-11-14T09:56:00Z",
    content:
      "BAKU, Azerbaijan  For the third straight year, efforts to fight climate change haven't lowered projections for how hot the world is likely to get and recent developments in China and the United State… [+4714 chars]",
  },
  {
    source: {
      id: "the-times-of-india",
      name: "The Times of India",
    },
    author: "PTI",
    title:
      "Human induced climate change made Nepal rains more intense, scientists say",
    description:
      "Heavy rainfall in late September intensified by climate change caused deadly floods in Nepal, killing over 240 people. A study by World Weather Attribution highlights the need for better urban planning and early warning systems. The floods brought unprecedent…",
    url: "https://economictimes.indiatimes.com/news/international/world-news/human-induced-climate-change-made-nepal-rains-more-intense-scientists-say/articleshow/114307272.cms",
    urlToImage:
      "https://img.etimg.com/thumb/msid-114307354,width-1200,height-630,imgsize-327320,overlay-economictimes/articleshow.jpg",
    publishedAt: "2024-10-17T07:18:16Z",
    content:
      "The late September floods that killed more than 240 people in Nepal were driven by rainfall made about 10 per cent more intense by human-caused climate change, a rapid analysis by a team of leading s… [+2996 chars]",
  },
  {
    source: {
      id: null,
      name: "Christiantoday.com",
    },
    author: "Peter Waddup",
    title:
      "COP29: Now the rich are suffering, is it finally time to help the poor?",
    description:
      "Climate change is a matter of life or death for millions of the world's poorest people. But could recent extreme weather in the world's wealthiest nations accelerate climate action?",
    url: "https://www.christiantoday.com/article/cop29.now.the.rich.are.suffering.is.it.finally.time.to.help.the.poor/142344.htm",
    urlToImage:
      "https://christiantoday-4cf9.kxcdn.com/en/full/83385/climate-change.jpg?p=142344&w=760&l=48&t=51",
    publishedAt: "2024-11-11T08:04:46Z",
    content:
      "(Photo: Getty/iStock)\r\nClimate change is a matter of life or death for millions of the world's poorest people. But could recent extreme weather in the world's wealthiest nations accelerate climate ac… [+4041 chars]",
  },
  {
    source: {
      id: null,
      name: "[Removed]",
    },
    author: null,
    title: "[Removed]",
    description: "[Removed]",
    url: "https://removed.com",
    urlToImage: null,
    publishedAt: "2024-11-06T11:28:55Z",
    content: "[Removed]",
  },
];

const NewsComponent: React.FC = () => {

 
  return (
    <div className="w-full max-h-screen flex items-center  ">
      <div
        className="absolute top-24 left-4 bg-white w-[22%] h-[80%] overflow-hidden"
        style={{ padding: "20px" }}
      >
        <h2 className="text-3xl font-bold">News on Nepal Floods</h2>
    
          <ul>
            {newsApi.map((article, index) => (
              <li
                className="flex flex-col gap-2"
                key={index}
                style={{ marginBottom: "15px" }}
              >
                <h3 className="font-medium">{article.title}</h3>
                <p>
                  <strong>Source:</strong> {article.source.name}
                </p>
                <p>
                  <strong>Published At:</strong>{" "}
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
                <p className="line-clamp-3">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  );
};

export default NewsComponent;
