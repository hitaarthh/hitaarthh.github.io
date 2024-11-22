export async function getMediumPosts(username = 'hitaarthh') {
    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          next: { revalidate: 3600 } // Cache for 1 hour
        }
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
  
      const data = await response.json();
      
      if (data.status === 'ok') {
        return data.items.map((post, index) => {
          // Extract high-quality image
          let imgUrl = post.thumbnail;
          if (post.content) {
            const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch && imgMatch[1]) {
              imgUrl = imgMatch[1];
            }
          }
          
          // Format date
          const date = new Date(post.pubDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });
  
          return {
            id: index + 1,
            img: imgUrl || '/img/news/default.jpg',
            location: 'Medium Blog',
            date: date,
            title: post.title,
            descriptions: post.content,
            link: post.link
          };
        });
      }
      
      throw new Error('Invalid response from Medium API');
    } catch (error) {
      console.error('Error fetching Medium posts:', error);
      return [];
    }
  }