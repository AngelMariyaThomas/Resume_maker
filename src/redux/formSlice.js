import { createSlice } from '@reduxjs/toolkit';

const initialState = {
     name: '',
     age: '',
     city: '',
     number: '',
     email: '',
     file: null,
     educationDetails: [{ institute: "", course: "" }],
     experiences: [{ jobTitle: "", employer: "", duration: '' }],
     skills: [{ skill: "" }],
     stepperNext:false
}

const formSlice = createSlice({
     name: "form",
     initialState,
     reducers: {
          updateName: (state, action) => {
               state.name = action.payload
          },

          updateAge: (state, action) => {
               state.age = action.payload
          },

          updateImage: (state, action) => {
               state.file = action.payload
          },

          updateCity: (state, action) => {
               state.city = action.payload
          },
          updateStepper:(state,action) =>{
               state.stepperNext =action.payload
          },

          updateNumber: (state, action) => {
               state.number = action.payload
          },
          
          updateEmail: (state, action) => {
               state.email = action.payload
          },
          addEducationDetail: (state) => {
               state.educationDetails.push({ institute: '', course: '' });
          },
          updateEducationDetail: (state, action) => {
               const { index, name, value } = action.payload;
               state.educationDetails[index][name] = value;
          },
          addExperienceDetail: (state, action) => {
               state.experiences.push({ jobTitle: '', employer: '', duration: '' })
          },
          updateExperienceDetail: (state, action) => {
               const { index, name, value } = action.payload;
               state.experiences[index][name] = value;
          },
          addSkills: (state, action) => {
               state.skills.push({ skill: '' })
          },
          updateSkills: (state, action) => {
               const { index, name, value } = action.payload;
               state.skills[index][name] = value;
          }
     }
})

export default formSlice.reducer;
export const { updateName, updateAge, updateNumber, updateCity, updateEmail,updateImage,
     addEducationDetail, updateEducationDetail, updateExperienceDetail, updateSkills, 
     updateStepper,addExperienceDetail, addSkills } = formSlice.actions;
