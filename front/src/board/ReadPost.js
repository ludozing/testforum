import React, { useState } from 'react';
import { useParams } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import { API_URL } from '../config/constants';
import useAsync from '../hooks/useAsync';

function ReadPost(props) {
    const param = useParams();
    const {id} = param;
    const [ commentData, setCommentData ] = useState({
        commentWriter: '',
        commentContent: '',
        commentDate: ''
    });
    async function getPost(){
        const response = await axios.get(`${API_URL}/readPost`)
        return response.data;
    }
    const state = useAsync(getPost);
    const {loading, error, data: result} = state;
    if(loading) return <div className='content appCon'>로딩중...</div>
    if(error) {
        console.log(error)
        return <div className='content appCon'>페이지를 나타낼 수 없습니다.</div>
    }
    if(!result) return null;
    return (
        <div>
            <div className='postContentArea'>
                제목<br/>
                글 내용
            </div>
            <div className='postCommentsArea'>
                댓글
                <div className='commentEditorArea'>
                    <CKEditor
                        editor={ ClassicEditor }
                        data="<p>Hello from CKEditor 5!</p>"
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log( 'Editor is ready to use!', editor );
                        } }
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            console.log( { event, editor, data } );
                            setCommentData({
                                ...commentData, commentContent: data
                            });
                        } }
                        onBlur={ ( event, editor ) => {
                            console.log( 'Blur.', editor );
                        } }
                        onFocus={ ( event, editor ) => {
                            console.log( 'Focus.', editor );
                        } }
                    />
                </div>
            </div>
        </div>
    );
}

export default ReadPost;