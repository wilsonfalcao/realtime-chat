export const UseRedux = (state = null, action) =>{

    switch(action.type){
        
        case "@user/LOGIN":
            return action.user;
        case "@user/LOGOUT":
            return null;
        default :
            return state;
    }
}