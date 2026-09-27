function UserList ({User}){
 const {name , email , username } = User


return(
    <div>
        <h2>Name:{name}</h2>
        <h3>Email:{email}</h3>
        <h3>Username:{username}</h3>
    </div>
)






}




export default UserList;