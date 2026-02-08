const user ={
    username:"harshit",
    reg_no:1250606,
    welcomemsg:function(){
        // here this keyword refers the current context
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
    
}
user.welcomemsg()
// user.welcomemsg="sam"
// user.welcomemsg()