
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import Edibles from './Edibles'

const mapStateToProps = (state, ownProps) => {
  return {
    inventory: state.shop.inventory
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: (item) => dispatch(addToCart(item))
  }
}

const EdiblesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Edibles)

export default EdiblesContainer
