```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // This will cause an error if the API request fails
  const data = fetch('/api/data');
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>Data from API: {JSON.stringify(data)}</p>
    </div>
  );
}

export default About;
```