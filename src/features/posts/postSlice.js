import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import sub from "date-fns/sub";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        date: sub(new Date(), {minutes:10}).toISOString()
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), {minutes:5}).toISOString()
        
    }
]


const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded :{ 
            reducer(state, action){
                   state.push(action.payload)
        },
        prepare(title, content, userId){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    date:new Date().toISOString(),
                    userId
                }
            }
        }
    } 
    
    }
})




export const {postAdded} = postsSlice.actions
export const selectAllPosts = (state) => state.posts
export default postsSlice.reducer