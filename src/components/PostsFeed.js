import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { useDispatch } from "react-redux";
import { startLoading, postsFetched } from "../store/feed/actions";

import { useSelector } from "react-redux";
import { selectFeedLoading, selectFeedPosts } from "../store/feed/selectors";

const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export default function PostsFeed() {
  const dispatch = useDispatch();
  const dataLoading = useSelector(selectFeedLoading);
  const dataPosts = useSelector(selectFeedPosts);
  //   const [data, setData] = useState({
  // loading: true,
  // posts: [],
  //   });

  async function fetchNext5Posts() {
    // setData({ ...data, loading: true });
    dispatch(startLoading());
    const res = await axios.get(
      `${API_URL}?offset=${dataPosts.length}&limit=5`
    );
    const morePosts = res.data.rows;
    dispatch(postsFetched(morePosts));
    // setData({
    //   loading: false,
    //   posts: [...data.posts, ...morePosts],
    // });
  }

  useEffect(() => {
    fetchNext5Posts();
  }, []);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>
      <div>
        {dataPosts.map((post) => {
          const { title, updatedAt, createdAt, content, id, tags } = post;
          return (
            <div key={id}>
              <h2>{title}</h2>
              <p>
                (id:{id}) {moment(createdAt).format("DD-MM-YYYY")}
                {tags.map((tag) => (
                  <b key={id}>{` (${tag.tag}) `}</b>
                ))}
              </p>
            </div>
          );
        })}
      </div>

      {dataLoading ? (
        <h2>LOADING</h2>
      ) : (
        <button onClick={fetchNext5Posts}>load next posts</button>
      )}
    </div>
  );
}
