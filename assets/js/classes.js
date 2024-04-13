
class card {
    static Id = 1;
    constructor(title, content, icon) {
        this.title = title;
        this.content = content;
        this.icon = icon;
        this.Id = this.Id++;
        this.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
}


class blogPost{
   constructor(title,imgSrc){
       this.title=title;
       this.imgSrc=imgSrc;
   }
}
