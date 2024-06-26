import { Component, OnInit } from '@angular/core';
import axios from 'axios';

interface BlogPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
    blogPosts: BlogPost[] = [];

    ngOnInit(): void {
        this.fetchBlogPosts();
    }

    async fetchBlogPosts() {
        try {
            const response = await axios.get('https://dummyjson.com/posts/');
            this.blogPosts = response.data.posts.slice(0, 10).map((post: any) => ({
                id: post.id,
                title: post.title,
                body: post.body,
                tags: post.tags,
                reactions: {
                    likes: post.reactions.likes,
                    dislikes: post.reactions.dislikes
                },
                views: post.views,
                userId: post.userId
            }));
        } catch (error) {
            console.error('Error fetching blog posts:', error);
        }
    }
}
