"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import LoadingState from './LoadingState';
import Link from 'next/link'

export default function Profile() {
  const [profileData, setprofileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/profiles", { next: { revalidate: 6000} });
        if (response.ok) {
          const res = await response.json();
          setprofileData(res.profiles);
          setIsLoading(false);
        } else {
          alert('An error occurred');
        }
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

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

          {isLoading ? (
            <LoadingState />
          ) : (
            <>
              {profileData.map(profile => (
                <div key={profile.id} className="col-md-3 mb-4">
                  <ProfileCard {...profile} />
                </div>
              ))}
            </>
          )}
        </div>
        <div className="row">
          <div className='col text-center mt-auto'>
            <Link href="https://www.profilesuite.com/discover" target='_blank'>
              <button className="profile-btn mt-auto">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ domain, name, intro, image, socials }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div className="profile-card flex flex-col justify-between h-full text-center border p-4 rounded-2xl shadow-lg">
      <div>
        <Image
          src={imgSrc}
          alt={name}
          width={128}
          height={128}
          className="profile-image mx-auto rounded-full"
          onError={() => {
            setImgSrc('https://cdn.vnoc.com/logos/logo-ProfileSuite-2.png');
          }}
        />
        <h3 className="profile-name mt-4 text-xl font-bold">{name}</h3>
        <p className="profile-intro text-sm text-gray-600">{intro}</p>
      </div>
      <div className="mt-auto">        
        <div className="social-icons flex justify-center gap-2 mt-2">
          {socials.facebook && <a href={socials.facebook} target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width={24} height={24} /></a>}
          {socials.twitter && <a href={socials.twitter} target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width={24} height={24} /></a>}
          {socials.linkedin && <a href={socials.linkedin} target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width={24} height={24} /></a>}
          {socials.instagram && <a href={socials.instagram} target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width={24} height={24} /></a>}
          {socials.youtube && <a href={socials.youtube} target="_blank" rel="noopener noreferrer"><Image src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width={24} height={24} /></a>}
        </div>
        <Link href={`https://${domain}`} target='_blank'>
          <button className="view-profile-btn mt-2 w-full bg-blue-500 text-white py-2 rounded-xl">View Profile</button>
        </Link>
      </div>
    </div>
  );
}
