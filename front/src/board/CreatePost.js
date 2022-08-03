import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './CreatePost.scss';

function CreatePost({postClass}) {
    const [ postData, setPostData ] = useState({
        postClass: '',
        // postTitle: 제목 input 값 받아오기
        postTitle: '',
        // postWriter: 아이디 정보 받아오기
        postWriter: '',
        // postDate: onSubmit 순간에 시간을 지정
        postDate: '',
        postContent: ''
    });
    // 아이디 정보
    const myId = '나'
    console.log(postData)
    function writeTitle(e) {
        e.preventDefault();
        let title = e.target.value
        setPostData({
            ...postData, postTitle: title
        });
    }
    function onSubmit(e) {
        e.preventDefault();
        // 현재 시간 계산
        setPostData({
            ...postData,
            postClass,
            postWriter: myId
        })
        console.log(postData, '작성!')
    }
    return (
        <div>
            <h1>글쓰기</h1>
            <table>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input type={'text'} name={'postTitle'} onChange={writeTitle}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
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
                                    setPostData({
                                        ...postData, postContent: data
                                    });
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <form onSubmit={onSubmit}>
                    <input type={'submit'} value='글쓰기'/>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;