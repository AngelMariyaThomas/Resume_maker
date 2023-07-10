import { useDispatch, useSelector } from 'react-redux'
import {
     addEducationDetail,
     updateEducationDetail,
     addExperienceDetail,
     addSkills,
     updateExperienceDetail,
     updateSkills
   } from "../redux/formSlice";


const useFormHandles = () => {
     const dispatch = useDispatch();
     const DATA = useSelector(state => state.form)

     const handleAddEducation = () => {
          dispatch(addEducationDetail());
        };

        const handleAddExperience = () => {
          dispatch(addExperienceDetail());
        };

        const handleAddSkill = () => {
          dispatch(addSkills());
        };

        const handleChangeEducation = (e, index) => {
          const { name, value } = e.target;
          dispatch(updateEducationDetail({ index, name, value }));
        };

        const handleChangeExperience = (e, index) => {
          const {name,value} =e.target;
          dispatch(updateExperienceDetail({index, name,value}));
        };     

        const handleChangeSkills = (e, index) => {
          const {name,value} =e.target;
          dispatch(updateSkills({index,name,value}))
        };


     return {DATA,handleAddEducation,handleAddExperience,handleAddSkill ,
     handleChangeEducation,handleChangeExperience,handleChangeSkills}
}

export default useFormHandles