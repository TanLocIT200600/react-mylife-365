import React from 'react';
import { useSelector } from 'react-redux';
import "./loading.scss";
import { loading } from '../../assets/index'

const Loading = () => {

  const isLoading = useSelector((state: any) => state.LoadingReducer.isLoading);


  return (
    <div>
      {isLoading && (
        <div className="bgLoading">
          <img src={loading} alt="loading" />
        </div>
      )}

    </div>
  );
}


export default Loading;