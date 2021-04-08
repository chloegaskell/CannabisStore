
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
import Flowers from './Flowers'

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

const FlowerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Flowers)

export default FlowerContainer
