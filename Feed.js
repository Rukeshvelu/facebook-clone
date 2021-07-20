import React from 'react'
import './Feed.css';
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post
            profilepic="https://static.toiimg.com/photo/msid-74059206/74059206.jpg?109647"
            message="It works"
            Timestamp="This is a timestamp"
            username='RukeshGowtham'
            image="https://cdn.evilmartians.com/front/posts/optimizing-react-virtual-dom-explained/cover-a1d5b40.png"
            />
            <Post 
             profilepic="https://static.toiimg.com/photo/msid-74059206/74059206.jpg?109647"
             message="It works"
             Timestamp="This is a timestamp"
             username='RukeshGowtham'
            />
           
        </div>
    )
}

export default Feed
