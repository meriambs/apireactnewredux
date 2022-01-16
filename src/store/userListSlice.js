import { createSlice } from '@reduxjs/toolkit'

export const userListSlice = createSlice({
  name: 'users',
  initialState: {
    list: [{}],
  },
  //payload c'est conteue qu'on va envoyer au store , hekel donnée ely yt3mer behim el store . 
  // state va subir les modification et etre envoyé au component 
  reducers: {
    setUsersList: (state,{payload}) => {
  const list = payload ;
  state.list = list;
        
      },
      resetUsersList: (state) => {
         state.list = []
      },

 
    
  },
})

// Action creators are generated for each case reducer function
export const { setUsersList,resetUsersList } = userListSlice.actions

export default userListSlice.reducer