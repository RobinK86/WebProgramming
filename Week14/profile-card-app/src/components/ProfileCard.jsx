function ProfileCard({ name, title, bio, image, facebook, instagram, twitter }) {
  return (
    <div className="profile-card">
      <img
        src={image}
        alt={`${name} profile`}
        className="profile-image"
      />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <p className="profile-bio">{bio}</p>

      <div className="social-buttons">
        <a href={facebook} className="btn btn-facebook" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={instagram} className="btn btn-instagram" target="_blank" rel="noreferrer">
          Instagram
        </a>
        {twitter && (
          <a href={twitter} className="btn btn-twitter" target="_blank" rel="noreferrer">
            Twitter
          </a>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
