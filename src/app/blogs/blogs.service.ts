import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { Tag } from './tag';

@Injectable()
export class BlogsService {
  postsCollection: AngularFirestoreCollection<Post>;
  postDocument: AngularFirestoreDocument<Post>;

  userId: string;

  constructor(private afs: AngularFirestore) {
    this.userId = firebase.auth().currentUser.uid;

    this.postsCollection = this.afs
      .collection('blogs')
      .doc(this.userId)
      .collection('posts', ref => ref.orderBy('time', 'desc').limit(5));
  }

  getPosts() {
    return this.postsCollection.valueChanges();
  }

  getSnapshot(): Observable<Post[]> {
    // ['added', 'modified', 'removed']
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post;
        return {
          id: a.payload.doc.id,
          title: data.title,
          content: data.content,
          tags: data.tags,
          favourite: data.favourite,
          time: data.time
        };
      });
    });
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`blogs/${this.userId}/posts/${id}`);
  }

  createPost(title: string, content: string, tags: any) {
    const body = {
      title,
      content,
      tags,
      favourite: false,
      user_id: this.userId,
      time: new Date().getTime()
    };
    return this.postsCollection.add(body);
  }

  deletePost(id: string) {
    console.log(id);
    return this.getPost(id).delete();
  }
}
