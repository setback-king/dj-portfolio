const Project = ({ urls, names, id, styles, handleClick, hovImg }) => {
  return (
    <div
      key={id}
      id={id}
      className="imageBox"
      onClick={(e) => handleClick(e.target.id)}
      style={styles}
      loading="lazy"
    >
      <img id={id} src={urls} alt={names} className="top" />
      <img
        id={id}
        src={hovImg}
        alt={names}
        className="bottom"
        fetchpriority="high"
      />
    </div>
  );
};

export default Project;
