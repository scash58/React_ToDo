//npm install yup - This is for a validation tool... see implementation below
//npm install formik - This allows us to create forms in React
import * as Yup from 'yup'//Here we import everything from Yup and give it an alias of Yup to refer to below


const catSchema = Yup.object().shape({
//Below we call to each property that will need to be validated, and use Yup to define the reqs for each property (required, stringLength, etc.)
    Name: Yup.string().max(50, 'Max 50 Characters').required('Required'),
    Description: Yup.string().max(100, 'Max 100 Characters')
})

//Validate the resources
const todoSchema = Yup.object().shape({

    Action: Yup.string().max(1000, 'Max a lot of Characters').required('Required'),
    Done: Yup.bool().default(false),
    CategoryId: Yup.number().required(),
    DateStarted: Yup.date(),
    DateFinished: Yup.date()
})

export {todoSchema};
export default catSchema;
