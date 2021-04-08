
import { connect } from 'react-redux'
import DescriptionComponent from './DescriptionComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.shop.cart,
  }
}


const CartContainer = connect(
  mapStateToProps,
)(DescriptionComponent)

export default CartContainer
