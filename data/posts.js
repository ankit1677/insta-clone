import { USERS } from "./users";

export const POSTS = [
    {   id: 0,
        imageUrl:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1054271462-1-1554385108.jpg",
        user:USERS[0].user,
        likes:7870,
        caption:"Train ride to Hogwarts",
        profile_picture:USERS[0].image,
        comments: [
            {
                user:"salman khan",
                comment:"Bhai ko kyu nahi le gaya be"
            },

            {
                user:'hrithik roshan',
                comment:'Aila !!'
            },

            {
                user:"jackie shroff",
                comment:"Bidu tere ko thok dega mai",
            },

            
        ]
    },

    {   id:1,
        imageUrl:"https://i.ytimg.com/vi/wfG-wNZeJgc/maxresdefault.jpg",
        user:USERS[1].user,
        likes:2345,
        caption:"MAi to jat yamla pagla deewana",
        profile_picture:USERS[1].image,
        comments: [
            {
                user:"sunny deol",
                comment:"Wo to mai hoon be"
            },

            {
                user:'matt damon',
                comment:'WTF'
            },

            {
                user:"mark ruffalo",
                comment:"I AM the HulK !!",
            },

            
        ]
    },

]

//console.log(POSTS[0].comments.length)