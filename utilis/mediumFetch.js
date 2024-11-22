export async function getMediumPosts(username = 'hitaarthh') {
    try {
      // Fetch data from Medium RSS feed using rss2json API
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}&cacheBuster=${Date.now()}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate', 
          },
        }
      );
  
      console.log('Response Status:', response.status);
  
      // Check if the response is not ok
      if (!response.ok) {
        throw new Error(`Failed to fetch Medium posts: HTTP ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched Data:', data);
  
      // Validate the API response structure
      if (data.status !== 'ok' || !data.items || !Array.isArray(data.items)) {
        throw new Error('Invalid response structure from Medium API');
      }
  
      // Process the Medium posts
      return data.items.map((post, index) => {
        // Default thumbnail
        let imgUrl = post.thumbnail;
  
        // Extract high-quality image if present in post.content
        if (post.content) {
          const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatch && imgMatch[1]) {
            imgUrl = imgMatch[1];
          }
        }
  
        // Format date or use fallback
        const date = post.pubDate
          ? new Date(post.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : 'Unknown Date';
  
        // Return the transformed post object
        return {
          id: index + 1,
          img: imgUrl || '/img/news/default.jpg', // Use default image if no thumbnail
          location: 'Medium Blog',
          date: date,
          title: post.title || 'Untitled Post',
          descriptions: post.content || 'No description available.',
          link: post.link || '#',
        };
      });
    } catch (error) {
      // Log detailed error for debugging
      console.error('Error fetching Medium posts:', error.message);
      console.error('Stack Trace:', error.stack);
  
      // Return an empty array to gracefully handle the error
      return [];
    }
  }
  