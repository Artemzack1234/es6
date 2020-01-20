class options{
   constructor(height, width, background, fontSize, textAlign,){
       this.height=height;
       this.width=width;
       this.background=background;
       this.fontSize=fontSize;
       this.textAlign=textAlign;

   }
   creatdiv(){
      document.body.style.height=this.height;
      document.body.style.width=this.width;
      document.body.style.backgroundColor=this.background;
      document.body.style.fontSize=this.fontSize;
      document.body.style.textAlign=this.textAlign;

      
   }
};
const corobka=new options('2px','1px','black','2px','right');
corobka.creatdiv();
