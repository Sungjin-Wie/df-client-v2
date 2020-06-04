import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchInfo } from "../../Lib/actions";

const Info = () => {
  const info = useSelector(state => state.info);
  const { data, isFetching } = info;
  const dispatch = useDispatch();
  const { server, id } = useParams();

  useEffect(() => {
    dispatch(fetchInfo(server, id));
  }, []);

  return (
    <div style={{ margin: "auto" }}>
      <pre>{JSON.stringify(info, null, 2)}</pre>
    </div>
  );
};

export default Info;
