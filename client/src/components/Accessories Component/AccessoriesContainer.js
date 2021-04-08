
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import Accessories from './Accessories'

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

const AccessoriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Accessories)

export default AccessoriesContainer
