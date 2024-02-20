function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
}) {
  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body  p-0">
        <div className="card-image">
          <img
            className="card-img-top"
            src={img}
          />
        </div>
        <div className="card-content p-3">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
          <div>
            <div className="card-icons">
              <i
                onClick={() => like(id)}
                className={`fa-heart fa-xl ${
                  likes ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i
              onClick={() => eliminarPost(id)}
              className="fa-solid fa-x"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
