import {Component} from '@angular/core';
import {PostsService} from '../services/post.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {

    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Dalibor Djordjevic';
        this.email = 'djordjevic@kraftwerk.co.at';
        this.address = {
            street: 'Kneza Mihajla Obrenovica 44',
            city: 'Nis',
            state: 'SRB',
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
    toggleHobbies() {
        if(this.showHobbies) {
            this.showHobbies = false;
        } else {
            this.showHobbies = true;
        }
    }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}