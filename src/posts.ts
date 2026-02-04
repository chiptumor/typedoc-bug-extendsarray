/** A post found on the main site. */
export class Post {
    /** The text content of the post. */
    content: string;

    constructor (content: string) {
        this.content = content;
    }
}

/** An array of posts fetched from the main site. */
export class Posts extends Array<Post> {
    /** The query used to fetch these posts. */
    query: string;
    /** The total amount of results under the used query. */
    total: number;

    constructor (query: string) {
        super(...[
            "Pleasure, as the absence of pain, is not the final good.",
            "Pleasure and pain are two distinct goods.",
            "That is to say, pleasure is nothing without pain."
        ].map(item => new Post(item)));
        
        this.query = query;
        this.total = this.length + Math.floor(Math.random() * 20);
    }
}
