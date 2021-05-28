import React, { useEffect } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchNext5Posts } from "../store/feed/actions";

import { useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

export default function PostsFeed() {
  const dispatch = useDispatch();
  const dataLoading = useSelector(selectFeedLoading);
  const dataPosts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>
        {dataPosts.map((post) => {
          const { title, updatedAt, createdAt, content, id, tags } = post;
          return (
            <div key={id}>
              <Link to={`/post/${post.id}`}>
                {post.title}
                <h2>{title}</h2>
                <p>
                  (id:{id}) {moment(createdAt).format("DD-MM-YYYY")}
                  {tags.map((tag) => (
                    <b key={tag.id}>{` (${tag.tag}) `}</b>
                  ))}
                </p>
              </Link>
            </div>
          );
        })}
      </div>

      {dataLoading ? (
        <h2>LOADING</h2>
      ) : (
        <button onClick={() => dispatch(fetchNext5Posts)}>
          load next posts
        </button>
      )}
    </div>
  );
}
