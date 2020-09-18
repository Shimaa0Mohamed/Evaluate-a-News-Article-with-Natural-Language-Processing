//import js functions from client side src/client/js .. to make webpack read it
import { handleSubmit } from './js/formHandler'
//imprt styles from src/client/styles ...to make webpack read it
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
//export js functions
export {
    handleSubmit
   }