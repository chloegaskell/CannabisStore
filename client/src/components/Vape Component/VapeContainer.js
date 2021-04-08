
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import Vape from './Vape'

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

const VapeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vape)

export default VapeContainer
