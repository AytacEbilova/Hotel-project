
class card {
    static Id = 1;
    constructor(title, content, icon) {
        this.title = title;
        this.content = content;
        this.icon = icon;
        this.Id = card.Id++;
        this.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
}


class blogPost{
    static Id = 1;
   constructor(title,imgSrc){
       this.Id = blogPost.Id++;
       this.title=title;
       this.imgSrc=imgSrc;
   }
}
