import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <div className="not-found__text">
        <span className="not-found__oops">Oops!</span>
        <h2 className="not-found__404">404</h2>
        <span className="not-found__page">Página no encontrada</span>
      </div>
      <img
        src="/images/minion-not-found.webp"
        alt="minion in alarm mode"
        className="not-found__image"
        width="250"
        height="250"
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
