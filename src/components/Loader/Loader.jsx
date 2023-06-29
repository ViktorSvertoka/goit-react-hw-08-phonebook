import { Comment } from 'react-loader-spinner';

export const Loader = () => (
  <Comment
    visible={true}
    height="80"
    width="80"
    ariaLabel="comment-loading"
    wrapperStyle={{}}
    wrapperClass="comment-wrapper"
    color="#fff"
    backgroundColor="#F4442E"
  />
);
