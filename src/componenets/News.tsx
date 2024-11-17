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

const NewsComponent: React.FC = () => {
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
  const [error, setError] = useState<string | null>(null);

  const API_KEY = "ad4b453afd7449e6a624fa0fd1f329f3";
  const API_URL = `https://newsapi.org/v2/everything?q=Nepal floods&apiKey=${API_KEY}`;
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }

        const data = await response.json();
        setNewsArticles([
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
            title:
              "Climate change worsened deadly Nepal floods, scientists say",
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
            title:
              "For 3rd straight year, no improvement in Earth's projected warming",
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
          {
            source: {
              id: "the-times-of-india",
              name: "The Times of India",
            },
            author: "PTI",
            title:
              "Himalayan glacial lakes saw 10.81 per cent area expansion from 2011 to 2024: Report",
            description:
              "Glacial lakes in the Himalayan region increased by 10.81 per cent in area from 2011 to 2024. This rise is due to climate change and heightens the risk of glacial lake outburst floods. The Indian lakes saw a 33.7 per cent rise, with 67 lakes in high-risk categ…",
            url: "https://economictimes.indiatimes.com/news/india/himalayan-glacial-lakes-saw-10-81-per-cent-area-expansion-from-2011-to-2024-report/articleshow/114906616.cms",
            urlToImage:
              "https://img.etimg.com/thumb/msid-114906657,width-1200,height-630,imgsize-754476,overlay-economictimes/articleshow.jpg",
            publishedAt: "2024-11-03T07:21:37Z",
            content:
              "New Delhi: Glacial lakes and other water bodies across the Himalayan region saw a 10.81 per cent increase in area from 2011 to 2024 due to climate change, signalling a heightened risk of glacial lake… [+3994 chars]",
          },
          {
            source: {
              id: null,
              name: "Foreign Policy",
            },
            author: "Michael Kugelman",
            title: "In South Asia, Expect Continuity From Washington",
            description:
              "Under Trump, the Indo-Pacific strategy is still likely to drive U.S. policy in the region.",
            url: "https://foreignpolicy.com/2024/11/06/south-asia-us-election-trump-indo-pacific-policy/",
            urlToImage:
              "https://foreignpolicy.com/wp-content/uploads/2024/11/trump-modi-india-GettyImages-1203055364.jpg?w=1000",
            publishedAt: "2024-11-06T19:30:12Z",
            content:
              "Welcome to Foreign Policys South Asia Brief.\r\nThe highlights this week: U.S. South Asia policy will likely have considerable continuity in Donald Trumps second term, Indian firms and individuals are … [+9583 chars]",
          },
          {
            source: {
              id: "abc-news",
              name: "ABC News",
            },
            author:
              "SETH BORENSTEIN Associated Press, SIBI ARASU Associated Press, MELINA WALLING Associated Press",
            title:
              "For 3rd straight year, no improvement in Earth's projected warming",
            description:
              "For the third straight year, efforts to fight climate change haven’t lowered projections for how hot the world is likely to get",
            url: "https://abcnews.go.com/Health/wireStory/3rd-straight-year-improvement-earths-projected-warming-115849542",
            urlToImage:
              "https://i.abcnewsfe.com/a/2adcbf32-094d-420c-9ba0-f626d2a27c02/wirestory_285ebf7f831f09ac2c913a0e1b59e43a_16x9.jpg?w=1600",
            publishedAt: "2024-11-14T07:50:32Z",
            content:
              "BAKU, Azerbaijan -- For the third straight year, efforts to fight climate change haven't lowered projections for how hot the world is likely to get even as countries gather for another round of talks… [+5436 chars]",
          },
          {
            source: {
              id: null,
              name: "The Star Online",
            },
            author: "Emma Farge",
            title:
              "Multiple climate disasters trigger first ever Red Cross disaster insurance pay-out",
            description:
              "GENEVA (Reuters) - The world was hit by so many floods and landslides in 2024 that it triggered the aid sector's first multi-disaster insurance pay-out, the Red Cross told Reuters, signalling both the scale of the problem and the need for new financing soluti…",
            url: "https://www.thestar.com.my/news/world/2024/11/08/multiple-climate-disasters-trigger-first-ever-red-cross-disaster-insurance-pay-out",
            urlToImage:
              "https://apicms.thestar.com.my/uploads/images/2024/11/08/3007464.jpg",
            publishedAt: "2024-11-08T10:31:00Z",
            content:
              "GENEVA (Reuters) - The world was hit by so many floods and landslides in 2024 that it triggered the aid sector's first multi-disaster insurance pay-out, the Red Cross told Reuters, signalling both th… [+2182 chars]",
          },
          {
            source: {
              id: "the-times-of-india",
              name: "The Times of India",
            },
            author: "PTI",
            title:
              "Himalayan glacial lakes saw 10.81 per cent area expansion from 2011 to 2024: Report",
            description:
              "Glacial lakes across the Himalayan region expanded by 10.81% from 2011 to 2024 due to climate change, according to a government report. India's lakes saw a 33.7% increase, raising concerns about glacial lake outburst floods. Advanced satellite technology is b…",
            url: "https://economictimes.indiatimes.com/news/environment/global-warming/himalayan-glacial-lakes-saw-10-81-per-cent-area-expansion-from-2011-to-2024-report/articleshow/114910313.cms",
            urlToImage:
              "https://img.etimg.com/thumb/msid-114910465,width-1200,height-630,imgsize-1386351,overlay-economictimes/articleshow.jpg",
            publishedAt: "2024-11-03T09:59:11Z",
            content:
              "NEW DELHI: Glacial lakes and other water bodies across the Himalayan region saw a 10.81 per cent increase in area from 2011 to 2024 due to climate change, signalling a heightened risk of glacial lake… [+3994 chars]",
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
            publishedAt: "2024-11-13T09:58:47Z",
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
            publishedAt: "2024-11-14T05:42:58Z",
            content: "[Removed]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Economic Digest: Nepal’s Business News in a Snap",
            description:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries. The report from Birgunj’s Sirsiya dry port highlights a mixed bag of economic activity, reflecting bo…",
            url: "https://english.khabarhub.com/2024/20/407107/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/Economic-Digest.jpg",
            publishedAt: "2024-10-20T02:15:05Z",
            content:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries.\r\nThe report from Birgunj’s Sirsiya dry po… [+3657 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Water Supply Ministry unveils 100-day progress report",
            description:
              "KATHMANDU: Minister for Water Supply, Pradeep Yadav, presented a progress report on his first 100 days in office at an event today. During this period, the diversion of 170 million liters of water per day from the Melamchi River in Sindhupalchowk to the Kathm…",
            url: "https://english.khabarhub.com/2024/21/407567/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2022/07/Pradeep-Yadav.jpg",
            publishedAt: "2024-10-21T15:15:16Z",
            content:
              "KATHMANDU: Minister for Water Supply, Pradeep Yadav, presented a progress report on his first 100 days in office at an event today.\r\nDuring this period, the diversion of 170 million liters of water p… [+3432 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "IFRC continues support to flood-hit communities in Nepal",
            description:
              "KATHMANDU: The International Federation of Red Cross (IFRC) said that its agencies are working on mobilising an emergency fund to support the ongoing efforts for floods-affected people in Nepal. In its immediate response, over 200 Nepal Red Cross staff and vo…",
            url: "https://english.khabarhub.com/2024/21/407471/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2023/11/IFRC.png",
            publishedAt: "2024-10-21T07:45:51Z",
            content:
              "KATHMANDU: The International Federation of Red Cross (IFRC) said that its agencies are working on mobilising an emergency fund to support the ongoing efforts for floods-affected people in Nepal.\r\nIn … [+1438 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "NC President Deuba lauds govt’s 100-day performance",
            description:
              "KATHMANDU: Nepali Congress (NC) President and former Prime Minister Sher Bahadur Deuba has expressed satisfaction with the government’s performance during its first 100 days. Deuba stated that there is no reason to be dissatisfied with the work accomplished b…",
            url: "https://english.khabarhub.com/2024/25/408529/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/09/sherbahadur-deuba-3.jpg",
            publishedAt: "2024-10-25T07:08:54Z",
            content:
              "KATHMANDU: Nepali Congress (NC) President and former Prime Minister Sher Bahadur Deuba has expressed satisfaction with the governments performance during its first 100 days.\r\nDeuba stated that there … [+1137 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Today’s news in a nutshell",
            description:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more. Maoist to hold nationwide warning assemblies The main opposition party, CPN Maoist Centre, has announce…",
            url: "https://english.khabarhub.com/2024/26/408820/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/News-Nutshell.jpg",
            publishedAt: "2024-10-26T16:15:05Z",
            content:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more.\r\nMaoist to hold nationwide warning assembli… [+3792 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Today’s news in a nutshell",
            description:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more. Bangladesh wins the SAFF Women’s Championship, Nepal once again finishes as runner-up Bangladesh has wo…",
            url: "https://english.khabarhub.com/2024/30/409780/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/News-Nutshell.jpg",
            publishedAt: "2024-10-30T16:15:18Z",
            content:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more.\r\nBangladesh wins the SAFF Women’s Champions… [+3507 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title:
              "President Paudel to leave for Azerbaijan to participate in COP29",
            description:
              "KATHMANDU: President Ram Chandra Paudel is leaving for Baku City of Azerbaijan on November 10 (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29). President Paudel is leading a high-level Nepali delegation to Baku to at…",
            url: "https://english.khabarhub.com/2024/06/410738/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/06/PRO_KTM_RAMCHANDRAPAUDEL_6F8A0966-scaled.webp",
            publishedAt: "2024-11-06T04:45:54Z",
            content:
              "KATHMANDU: President Ram Chandra Paudel is leaving for Baku City of Azerbaijan on November 10 (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29).\r\nPresident P… [+1268 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Economic Digest: Nepal’s Business News in a Snap",
            description:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries. The challenges facing Nepal’s economy are multifaceted, highlighted by the significant ten-hour daily…",
            url: "https://english.khabarhub.com/2024/10/411644/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/Economic-Digest.jpg",
            publishedAt: "2024-11-10T02:15:11Z",
            content:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries.\r\nThe challenges facing Nepal’s economy ar… [+5536 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title:
              "Global collaboration essential to cope with climate change impact: CM Singh",
            description:
              "DHANUSHA: Chief Minister of Madhesh Province, Satish Kumar Singh, has said global collaboration is essential to cope with common challenge of this hour- climate change. During a meeting with a team leader of UK environment-friendly economic growth project and…",
            url: "https://english.khabarhub.com/2024/12/412132/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/09/satish-kumar-singh.jpg",
            publishedAt: "2024-11-12T05:15:03Z",
            content:
              "DHANUSHA: Chief Minister of Madhesh Province, Satish Kumar Singh, has said global collaboration is essential to cope with common challenge of this hour- climate change.\r\nDuring a meeting with a team … [+1205 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title:
              "Partially damaged Upper Tamakosi hydro project to be repaired soon",
            description:
              "KATHMANDU: Minister of Energy, Water Resources and Irrigation Deepak Khadka said maintenance of the Upper Tamakoshi hydropower project, partially damaged by the recent floods and landslides, will be carried out without any delay. A team comprising Secretary a…",
            url: "https://english.khabarhub.com/2024/19/407083/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/09/Deepak-Khadka--scaled.jpg",
            publishedAt: "2024-10-19T14:15:54Z",
            content:
              "KATHMANDU: Minister of Energy, Water Resources and Irrigation Deepak Khadka said maintenance of the Upper Tamakoshi hydropower project, partially damaged by the recent floods and landslides, will be … [+817 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Today’s news in a nutshell",
            description:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more. Nepali and Chinese parliamentary delegations meet in Geneva The Nepali and Chinese parliamentary delega…",
            url: "https://english.khabarhub.com/2024/16/406440/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/News-Nutshell.jpg",
            publishedAt: "2024-10-16T16:15:03Z",
            content:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more.\r\nNepali and Chinese parliamentary delegatio… [+5556 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Keshab Sawad",
            title: "Oli govt under fire: 8 scandals marking honeymoon period",
            description:
              "KATHMANDU: Opposition parties, including the main opposition Maoist Centre, have concluded that the current government led by KP Sharma Oli has failed during its ‘honeymoon period.’ A joint meeting of opposition parties held on Friday at the call of former Pr…",
            url: "https://english.khabarhub.com/2024/20/407075/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/09/kp-sharma-oli-pm-e1729339254546.jpg",
            publishedAt: "2024-10-20T00:45:37Z",
            content:
              "KATHMANDU: Opposition parties, including the main opposition Maoist Centre, have concluded that the current government led by KP Sharma Oli has failed during its ‘honeymoon period.’\r\nA joint meeting … [+13155 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Economic Digest: Nepal’s Business News in a Snap",
            description:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries. The stock market exhibited resilience on Tuesday, rebounding with a gain of 25.88 points, or 0.98 per…",
            url: "https://english.khabarhub.com/2024/23/407745/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/Economic-Digest.jpg",
            publishedAt: "2024-10-23T02:15:57Z",
            content:
              "KATHMANDU: Economic Digest offers a concise yet comprehensive overview of significant business happenings in Nepal, presented in easily digestible summaries.\r\nThe stock market exhibited resilience on… [+3113 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Govt’s 100-day period satisfactory: Ruling coalition",
            description:
              "KATHMANDU: The ruling parties have issued a joint statement following a meeting held at the Prime Minister’s residence in Baluwatar on Friday. The statement addresses the government’s first 100 days, current issues, and upcoming plans. The current government …",
            url: "https://english.khabarhub.com/2024/25/408584/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/10/Ruling-coalition-October-2024-scaled-e1729857247748.jpg",
            publishedAt: "2024-10-25T11:55:40Z",
            content:
              "KATHMANDU: The ruling parties have issued a joint statement following a meeting held at the Prime Minister’s residence in Baluwatar on Friday.\r\nThe statement addresses the government’s first 100 days… [+5587 chars]",
          },
          {
            source: {
              id: null,
              name: "Inter Press Service",
            },
            author: "Tanka Dhakal",
            title:
              "Cryosphere Crisis: Scientists Warn of Devastating Global Impacts Without Urgent Climate Action",
            description:
              "Scientists warn of vastly higher impacts on billions of people’s livelihood and cost to the global economy by the accelerating losses in the world’s snow and ice regions, aka the cryosphere. Over 50 leading cryosphere scientists released an annual report on t…",
            url: "https://www.ipsnews.net/2024/11/cryosphere-crisis-scientists-warn-devastating-global-impacts-without-urgent-climate-action/",
            urlToImage: "https://www.ipsnews.net/Library/2024/11/mountain.jpg",
            publishedAt: "2024-11-12T06:55:51Z",
            content:
              "Climate Action, Climate Change, COP29, Editors' Choice, Environment, Featured, Global, Headlines, Human Rights, Humanitarian Emergencies, Sustainable Development Goals, TerraViva United NationsCOP29\r… [+4664 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Today’s news in a nutshell",
            description:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more. Govt has completed 70 percent of promised work: PM Prime Minister (PM) KP Oli has claimed that the gove…",
            url: "https://english.khabarhub.com/2024/23/408125/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/05/News-Nutshell.jpg",
            publishedAt: "2024-10-23T16:15:30Z",
            content:
              "KATHMANDU: Khabarhub brings you a glimpse of major developments of the day in Nepal, including politics, business/economy, sports, entertainment, and more.\r\nGovt has completed 70 percent of promised … [+4272 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "Call for declaring Dhulikhel a ‘crisis-hit zone’",
            description:
              "KAVREPALANCHOWK: Dhulikhel Municipality has demanded the government declare it as a ‘crisis-hit zone’ following a huge loss amounting to Rs 1 billion due to recent floods and landslides. A delegation of the people’s representatives, including Dhulikhel mayor …",
            url: "https://english.khabarhub.com/2024/28/409177/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2021/04/Dhulikhel_Municipality.jpg",
            publishedAt: "2024-10-28T06:15:11Z",
            content:
              "KAVREPALANCHOWK: Dhulikhel Municipality has demanded the government declare it as a ‘crisis-hit zone’ following a huge loss amounting to Rs 1 billion due to recent floods and landslides.\r\nA delegatio… [+1920 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Ishwar Dev Khanal",
            title: "“Act decisively or confront public backlash”",
            description:
              "KATHMANDU: The vigil organized by the main opposition –Maoist Center –in Kathmandu on Saturday spotlighted the deepening discontent with the ruling coalition led by CPN-UML and the Nepali Congress (NC). Spearheaded by Maoist Chairman Pushpa Kamal Dahal “Prach…",
            url: "https://english.khabarhub.com/2024/27/408836/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/10/prachand-5-e1729952560509.jpg",
            publishedAt: "2024-10-27T00:15:37Z",
            content:
              "KATHMANDU: The vigil organized by the main opposition –Maoist Center in Kathmandu on Saturday spotlighted the deepening discontent with the ruling coalition led by CPN-UML and the Nepali Congress (NC… [+6952 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "COP29: President Paudel leaving for Azerbaijan today",
            description:
              "KATHMANDU: President Ram Chandra Paudel is leaving for Baku City of Azerbaijan today (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29). President Paudel is leading a high-level Nepali delegation to Baku to attend the …",
            url: "https://english.khabarhub.com/2024/10/411718/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/11/Ram-Chandra-Paudel-.webp",
            publishedAt: "2024-11-10T00:48:38Z",
            content:
              "KATHMANDU: President Ram Chandra Paudel is leaving for Baku City of Azerbaijan today (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29).\r\nPresident Paudel is … [+1252 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title: "COP29: President Paudel leaves for Azerbaijan",
            description:
              "KATHMANDU: President Ram Chandra Paudel left for Baku City of Azerbaijan today (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29). President Paudel is leading a high-level Nepali delegation to Baku to attend the summit…",
            url: "https://english.khabarhub.com/2024/10/411791/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/11/Ram-Chandra-Poudel-leave-for-azarbaizan-2.jpg",
            publishedAt: "2024-11-10T12:19:29Z",
            content:
              "KATHMANDU: President Ram Chandra Paudel left for Baku City of Azerbaijan today (Sunday) to participate in the 29th UN Conference of the Parties on Climate Change (COP-29).\r\nPresident Paudel is leadin… [+1246 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Khabarhub",
            title:
              "COP29: Climate catastrophes in Nepal; call for global support",
            description:
              "KATHMANDU: On the afternoon of August 16, a sudden flood struck Thame in the Khumbu Pasang Lhamu Rural Municipality of Solukhumbu, catching residents off guard. The locals never expected such an abrupt deluge, and in an instant, their village was transformed …",
            url: "https://english.khabarhub.com/2024/11/411918/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/11/COP29.jpg",
            publishedAt: "2024-11-11T02:06:41Z",
            content:
              "KATHMANDU: On the afternoon of August 16, a sudden flood struck Thame in the Khumbu Pasang Lhamu Rural Municipality of Solukhumbu, catching residents off guard.\r\nThe locals never expected such an abr… [+6635 chars]",
          },
          {
            source: {
              id: null,
              name: "Khabarhub.com",
            },
            author: "Vijay Devkota",
            title: "Even skies are under the control of govt-protected mafia",
            description:
              "KATHMANDU: CPN-UML Chairman KP Oli is currently occupying the office of the Prime Minister and Council of Ministers at Singha Durbar, the Federal Secretariat that oversees and coordinates the government of Nepal. The ‘aerial distance’ to the country’s first a…",
            url: "https://english.khabarhub.com/2024/11/411893/",
            urlToImage:
              "https://english.khabarhub.com/wp-content/uploads/2024/11/airport-news-e1731254153429.jpg",
            publishedAt: "2024-11-11T00:15:42Z",
            content:
              "KATHMANDU: CPN-UML Chairman KP Oli is currently occupying the office of the Prime Minister and Council of Ministers at Singha Durbar, the Federal Secretariat that oversees and coordinates the governm… [+7962 chars]",
          },
        ]);
      } catch (err: any) {
        setError(err.message || "An error occurred while fetching news");
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full max-h-screen flex items-center  ">
      <div
        className="absolute top-24 left-4 bg-white w-[22%] h-[80%] overflow-hidden"
        style={{ padding: "20px" }}
      >
        <h2 className="text-3xl font-bold">News on Nepal Floods</h2>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : newsArticles.length > 0 ? (
          <ul>
            {newsArticles.map((article, index) => (
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
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsComponent;
