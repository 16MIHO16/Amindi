import "./Video.css";

function Video(props) {
  return (
    <div className="box">
      <a href={props.link}>
        <img className="thumbnail" src={props.thumbnail} />
      </a>
      <div className="info">
        <p className="title">{props.title}</p>
        <p className="channelName">{props.channelName}</p>
        <p className="views">{props.views}</p>
      </div>
    </div>
  );
}

export default Video;
