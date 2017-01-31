//This component handles the App template used on every page
import {connect} from 'react-redux'
import Sample from './Sample'


const mapStateToProps = state => ({
  sample: state, 
})

export default connect(mapStateToProps)(Sample)