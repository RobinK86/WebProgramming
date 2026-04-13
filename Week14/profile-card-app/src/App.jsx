import ProfileCard from './components/ProfileCard';
import './App.css';

const celebrities = [
  {
    id: 1,
    name: 'Jennifer Lawrence',
    title: 'Actress',
    bio: 'Academy Award-winning actress known for The Hunger Games franchise, Silver Linings Playbook, and American Hustle. One of the most celebrated performers of her generation.',
    image: '/images/jennifer-lawrence.jpg',
    facebook: 'https://www.facebook.com/JenniferLawrence/',
    instagram: 'https://www.instagram.com/jenniferlawerence/',
  },
  {
    id: 2,
    name: 'Elizabeth Banks',
    title: 'Actress, Director & Producer',
    bio: 'Versatile actress and filmmaker known for playing Effie Trinket in The Hunger Games and starring in the Pitch Perfect franchise. Also an accomplished director and producer in Hollywood.',
    image: '/images/elizabeth-banks.jpg',
    facebook: 'https://www.facebook.com/p/Elizabeth-Banks-100090175041377/',
    instagram: 'https://www.instagram.com/elizabethbanks/',
    twitter: 'https://x.com/ElizabethBanks',
  },
  {
    id: 3,
    name: 'Madonna',
    title: 'Singer & Entertainer',
    bio: 'The undisputed Queen of Pop, Madonna has sold over 300 million records worldwide. Known for constantly reinventing herself across decades of hits like Like a Prayer and Material Girl.',
    image: '/images/madonna.jpg',
    facebook: 'https://www.facebook.com/madonna',
    instagram: 'https://www.instagram.com/madonna/',
    twitter: 'https://x.com/Madonna',
  },
  {
    id: 4,
    name: 'Sarah Silverman',
    title: 'Comedian & Actress',
    bio: 'Acclaimed stand-up comedian, actress, and writer known for her sharp, boundary-pushing humor. Star of The Sarah Silverman Program and a prominent voice in political comedy.',
    image: '/images/sarah-silverman.jpg',
    facebook: 'https://www.facebook.com/SarahSilverman',
    instagram: 'https://www.instagram.com/sarahkatesilverman/',
    twitter: 'https://x.com/SarahKSilverman',
  },
  {
    id: 5,
    name: 'Mark Ruffalo',
    title: 'Actor & Activist',
    bio: 'Three-time Academy Award nominee best known for portraying Bruce Banner / The Hulk in the Marvel Cinematic Universe. Also a passionate environmental and social justice activist.',
    image: '/images/mark-ruffalo.jpg',
    facebook: 'https://www.facebook.com/markruffalo',
    instagram: 'https://www.instagram.com/markruffalo/',
    twitter: 'https://x.com/MarkRuffalo',
  },
];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Celebrity Profiles</h1>
        <p>A showcase of iconic public figures</p>
      </header>

      <main className="cards-grid">
        {celebrities.map((celebrity) => (
          <ProfileCard
            key={celebrity.id}
            name={celebrity.name}
            title={celebrity.title}
            bio={celebrity.bio}
            image={celebrity.image}
            facebook={celebrity.facebook}
            instagram={celebrity.instagram}
            twitter={celebrity.twitter}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
