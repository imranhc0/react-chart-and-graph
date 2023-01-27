import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  area: [
    {
        sparklineData : [47, 45, 54, 38, 56, 24, 65, 31, 37, 39],
        title: "Total Threat",
        color: "#FBBB44"
    },
    {
        sparklineData : [47, 45, 54],
        title: "Block Request",
        color: "#ED5D5D"
    },
    {
        sparklineData : [ 38, 56, 24, 65, 31, 37, 39],
        title: "Allow Request Threat",
        color: "#07DA80"
    }
],
  dnsActivity: {
    block: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39,62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,61, 27, 54, 43, 19, 46],
    allow: [47, 45, 54, 38, 56, 24, 65, 31, 37, 39,62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46,61, 27, 54, 43, 19]
  },
  pieChart: {
    series: [21, 23, 19,60],
    labels: ['Command Control Host', 'Bogonos', 'Botnet Host', "love"]
  },
  whatSelected: ""
}

export const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    areaSelected: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.whatSelected = action.payload
    },
    updateArea: (state, action) => {
      const {title, data} = action.payload
      console.log(title)
      const cleanData = data.split(",").map((item)=> Number(item))

      state.area.map((item)=> {
        if(item.title === title){
          item.sparklineData = cleanData 
          item.color = item.color
        }
        
        return item
      })
      console.log(state.area)

      

     
      // const updated=  state.area.filter((item)=> {
      //   if(action.payload.title === item.title){
      //     item.sparklineData = action.payload.data.split(",")
      //   }
      //   return item
      // })
      // const newState = [...state.area, updated]
      // return newState
      
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { areaSelected, updateArea, incrementByAmount } = chartSlice.actions

export default chartSlice.reducer