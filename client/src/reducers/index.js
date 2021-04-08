
import { combineReducers } from 'redux'
import { ADD_TO_CART, RESET_SHOP } from './../actions'



let initialState = { 
    inventory: [
        {
            id: "1",
            type:"flower",
            name: "AAA Hybrid",
            pictureURL: "/images/AAA.png",
            price: "5.35",
            description: "Frosty, sweet and earthy hybrid flower; hang dried and trimmed to perfection. "
        },
        {
            id: "2",
            type:"flower",
            name: "Indica Bud",
            pictureURL: "/images/Indica.png",
            price: "4.99",
            description: "Proudly grown in Canada, Simple Stash offers consumers quality whole flower without all of the confusion. "
        },



        {
            id: "3",
            type:"flower",

            name: "Sativa Bud",
            pictureURL: "/images/Sativa.png",
            price: "4.99",
            description: "Proudly grown in Canada, Simple Stash offers consumers quality whole flower without all of the confusion."
        },
        {
            id: "4",
            type:"flower",

            name: "Gas Berries",
            pictureURL: "/images/GasBerries.png",
            price: "8.03",
            description: "Gas Berries #112 is a cross of Sour Diesel, OG Kush, and Blueberry. This pheno was selected for its rich berry and gasoline mixed aroma and flavour."
        },
        {
            id: "5",
            type:"flower",

            name: "Balance",
            pictureURL: "/images/Balance.png",
            price: "7.57",
            description: "Solei Balance is a hybrid strain with dark green buds that are sun-grown in a greenhouse, and very mild THC potency. "
        },
        {
            id: "6",
            type:"flower",

            name: "Durga Mata",
            pictureURL: "/images/DurgaMata.png",
            price: "12.99",
            description: "Durga Mata 2 is a high-CBD indica strain with very mild THC potency potential and a terpene mix which delivers a sweet citrusy aroma. "
        },
        {
            id: "7",
            type:"flower",

            name: "THC CBD Indica",
            pictureURL: "/images/THCCBD.png",
            price: "15.02",
            description: "An indica-dominant strain from THC BioMed in Kelowna, B.C., with medium to high CBD levels, and spicy, floral aromas."
        },
        {
            id: "8",
            type:"vape",

            name: "Kush Mint",
            pictureURL: "/images/KushMint.png",
            price: "29.95",
            description: "Back Forty Kush Mint Hybrid 1.0 g cartridge has a refreshingly and sharp burst of mint with a gentle lemongrass finish. "
        },
        {
            id: "9",
            type:"vape",

            name: "Boost Sativa",
            pictureURL: "/images/BoostSativa.png",
            price: "24.95",
            description: "A 0.5 g cannabis-derived vape, made from a blend of naturally occuring terpenes and high quality distillate. "
        },
        {
            id: "10",
            type:"vape",

            name: "Lemon Haze",
            pictureURL: "/images/LemonHaze.png",
            price: "49.95",
            description: "This sativa-dominant hybrid is inspired by OG cultivator Lemon Haze, with a powerful and pungent citrus aroma. "
        },
        {
            id: "11",
            type:"vape",

            name: "Sour Pineapple",
            pictureURL: "/images/SourPineapple.png",
            price: "49.95",
            description: "Reminiscent of pineapple cream soda, this distillate is full of terpenes including limonene, linalool, alpha-pinene, myrcene, and beta-caryophyllene. "
        },
        {
            id: "12",
            type:"edibles",

            name: "Bakerstreet & Ginger",
            pictureURL: "/images/bakerstreet.png",
            price: "4.95",
            description: "Masterfully combining Bakerstreet Distilled Cannabis with ginger ale and other ingredients to create a refreshing cannabis experience."
        },
        {
            id: "13",
            type:"edibles",

            name: "Balance Solid Milk Chocolate",
            pictureURL: "/images/milk.png",
            price: "4.50",
            description: "Every creamy and smooth Chowie Wowie Balanced THC/CBD Milk Chocolate contains one piece of quality milk chocolate with equal amounts of THC and CBD. "
        },
        {
            id: "14",
            type:"edibles",

            name: "Dark Chocolate CBD",
            pictureURL: "/images/dark.png",
            price: "4.50",
            description: "One pieces of dark chocolate breakable into two portions each portion with 10 mg of CBD (20 mg Total). "
        },
        {
            id: "15",
            type:"edibles",

            name: "Raspberry Milk Chocolate CBD",
            pictureURL: "/images/raspberry.png",
            price: "4.80",
            description: "Legend Raspberry Milk Chocolate combines 1 mg of THC with 20mg of CBD, and premium 46% milk chocolate and natural flavour. "
        },
        {
            id: "16",
            type:"edibles",

            name: "Ice Milk Chocolate",
            pictureURL: "/images/ice.png",
            price: "4.80",
            description: "Bhang® Ice Milk Chocolate is Powered by INDIVA. These bars combine rich 48% cocoa and THC, and are scored into four pieces. "
        },
        {
            id: "17",
            type:"accessories",

            name: "Ice Water Bong",
            pictureURL: "/images/bong.png",
            price: "40é00",
            description: "A blue water pipe from Red Eye Glass with a bubble base, a funnel bowl and a diffuser downstem."
        },
        {
            id: "18",
            type:"accessories",

            name: "Sherlock Pipe",
            pictureURL: "/images/pipe.png",
            price: "19.00",
            description: "The 4 Sherlock pipe, made with thick borosilicate glass, is designed with an ash catcher and a bowl with a built-in honeycomb screen. "
        },
        {
            id: "19",
            type:"accessories",

            name: "Wooden Micro-Dose Inhaler",
            pictureURL: "/images/inhaler.png",
            price: "10.00",
            description: "RYOT’s one-hitters or micro-dose inhalers are 3” wooden bats, are made to fit into most average-sized dugout systems. "
        },
        {
            id: "20",
            type:"accessories",

            name: "Rolling Papers",
            pictureURL: "/images/papers.png",
            price: "2.40",
            description: "Organic Hemp Rolling Papers by Raw made from unbleached flax and hemp fibre, available in standard size 50 or 100 pack and king size slim 32 pack.  "
        }
    
    
    ],
    cart: [],
}





const addToCart = (state, item) => {

    var foundItems = state.cart.filter(function (cartItem) {
        return cartItem.id === item.id;
    });
    const newItem = {
            id: item.id,
            quantity: 1,
            price: item.price,
            unitPrice: item.price,
            name: item.name,
            type: item.flower,
            pictureURL: item.pictureURL,
            description: item.description

        };

        let cart = [newItem];
        return {
            ...state,
            cart        }
    }
    



const shopReducer = (state=initialState, action) => {
  let cart;
  switch (action.type) {
    case ADD_TO_CART:
        return addToCart(state, action.item, -1)
    case RESET_SHOP:
            console.log("INSIDE RESET SHOP")
            return initialState
    default:
      return state    
  }  
}

const combinedReducer = combineReducers({
  shop: shopReducer
})

export default combinedReducer
