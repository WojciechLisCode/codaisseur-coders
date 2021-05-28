import React, { useEffect } from "react";
import moment from "moment";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchPost } from "../store/postPage/actions";

import { useSelector } from "react-redux";
import { selectPostAndComments } from "../store/postPage/selectors";
import ReactMarkdown from "react-markdown";

export default function PostPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const postData = useSelector(selectPostAndComments);

  return (
    <div>
      {!postData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{postData.post.title}</h1>
          <p className="meta">
            created:
            {moment(postData.post.createdAt).format("DD-MM-YYYY")},{" by: "}
            {postData.post.developer.name}
            <br></br>tags:
            {postData.post.tags.map((tag) => (
              <b key={tag.id}> {tag.tag} </b>
            ))}
          </p>

          <ReactMarkdown children={postData.post.content} />

          <h2>Comments:</h2>
          <div>
            {postData.comments.rows.map((comment) => {
              return (
                <div key={comment.id}>
                  <p>
                    <b>{comment.text}</b>
                  </p>
                  <p>
                    by: {comment.developer.name} .
                    {moment(comment.createdAt).format("DD-MM-YYYY")}.
                  </p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
