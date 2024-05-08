const Project = ({ urls, names, id, styles, handleClick, hovImg }) => {
  return (
    <div
      key={id}
      id={id}
      className="imageBox"
      onClick={(e) => handleClick(e.target.id)}
      style={styles}
    >
      <img id={id} src={urls} alt={names} className="top" loading="lazy" />
      <img id={id} src={hovImg} alt={names} className="bottom" />
    </div>
  );
};

export default Project;
