
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

class faq{
    static Id=1
    constructor(question,answer){
        this.question=question;
        this.answer=answer;
        this.Id=faq.Id++;
    }
}

class employee{
    static Id=1;
    constructor( fullName, position, comment, imgSrc){
        this.Id=employee.Id++;
        this.fullName=fullName;
        this.position=position;
        this.comment=comment;
        this.imgSrc=imgSrc;
    }
}

class customer{
    static Id=1;
    constructor(fullName, email, message,isRead='false'){
        this.Id=customer.Id++;
        this.fullName=fullName;
        this.email=email;
        this.message=message;
    
    }
}