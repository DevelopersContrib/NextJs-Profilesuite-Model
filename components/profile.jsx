import Image from 'next/image';

const profilesData = [
  {
    id: 1,
    name: "Alicia Fox",
    address: "Delray Beach, Florida",
    intro: "Happy is the new rich.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://cdn.vnoc.com/profilesuite/models/CELESTE%20B.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    address: "Delray Beach, Florida",
    intro: "Create impact with every strategy.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://cdn.vnoc.com/profilesuite/models/JEANIE%20H.JPG",    
  },
  {
    id: 3,
    name: "Alice Johnson",
    address: "Delray Beach, Florida",
    intro: "Build with passion, design with purpose.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://cdn.vnoc.com/profilesuite/models/ALIA%20B.jpeg",
  },
  {
    id: 4,
    name: "Anna Williams",
    address: "Delray Beach, Florida",
    intro: "Craft experiences that matter.",
    image: "https://cdn-icons-png.flaticon.com/512/3177/3177440.png",
    cover_image: "https://cdn.vnoc.com/profilesuite/models/COLLEEN%20C.jpg",
  }
];



export default function Profile() {
  return (
    <section className="profile-section">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-12 text-center mb-4">
            <h2 className="profile-title fw-bold">Discover Our Talented Models</h2>
            <p className="lead">
              Discover the essence of talent and style in each profile. Connect with models who bring unique charisma, confidence, and creativity to every shoot!
            </p>

          </div>

          {profilesData.map(profile => (
            <div key={profile.id} className="col-md-3 d-flex">
              <ProfileCard {...profile} />
            </div>
          ))}
        </div>
        <div className="row">
            <div className='col text-center'><button className="profile-btn">View More</button></div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ name, address, intro, image, cover_image }) {
  return (
    <div className="profile-card d-flex flex-column">
      <div className='d-flex'>
        <Image
          src={image}
          alt={`${name}'s Profile`}
          width={50}
          height={50}
          className="profile-image rounded-circle me-2"
        />
        <h3 className="profile-name">{name}</h3>
      </div>
      <div className='cover-image py-2'>
        <Image
          src={cover_image}
          alt={`${name}'s Profile`}
          width={250}
          height={250}
          className='img-responsive'
        />
      </div>
      <div className="profile-addres small">{address}</div>
      <p className="profile-intro">{intro}</p>      
    </div>
  );
}
