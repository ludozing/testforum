import React from 'react';
import axios from 'axios';
import { API_URL } from '../config/constants';
import useAsync from '../hooks/useAsync';
import './PostList.scss';

function PostList({postClass}) {
    async function getPosts(){
        const response = await axios.post(`${API_URL}/getPosts`, postClass)
        return response.data;
    }
    const state = useAsync(getPosts);
    const {loading, error, data: result} = state;
    if(loading) return <div className='content appCon'>로딩중...</div>
    if(error) {
        console.log(error)
        return <div className='content appCon'>페이지를 나타낼 수 없습니다.</div>
    }
    if(!result) return null;
    return (
        <table className='postList'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일자</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item, index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.postNo}</td>
                            <td><a href={`/read/${item.postNo}`}>{item.postTitle}</a></td>
                            <td>{item.postWriter}</td>
                            <td>{item.postData}</td>
                            <td>{item.viewCount}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default PostList;