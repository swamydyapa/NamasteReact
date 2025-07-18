import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<header className="header">
			<div className="logo-container">
				<img
					className="logo"
					alt="nav logo img"
					src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
				/>
			</div>
			<nav className="nav-items">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</nav>
		</header>
	);
};
const restaurantList = [
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "491475",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Ameerpet",
			areaName: "Gachibowli",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.2,
			parentId: "61955",
			avgRatingString: "4.2",
			totalRatingsString: "3.8K+",
			sla: {
				deliveryTime: 42,
				lastMileTravel: 6.6,
				serviceability: "SERVICEABLE",
				slaString: "40-45 mins",
				lastMileTravelString: "6.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-03 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹165 OFF",
				subHeader: "ABOVE ₹849",
				discountTag: "FLAT DEAL",
				headerTypeV2: 12,
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "3.5",
					ratingCount: "116",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/chinese-wok-ameerpet-gachibowli-rest491475",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "437301",
			name: "Pizza Hut",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/f8f8c38f-320b-4e47-bffc-9df7b76d9552_437301.JPG",
			locality: "OLD MLA Quarters roa",
			areaName: "Himayat Nagar",
			costForTwo: "₹350 for two",
			cuisines: ["Pizzas"],
			avgRating: 4.3,
			parentId: "721",
			avgRatingString: "4.3",
			totalRatingsString: "3.6K+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-04 00:45:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "android/static-assets/icons/big_rx.png",
						description: "bolt!",
					},
					{
						imageId: "Rxawards/_CATEGORY-Pizza.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "bolt!",
									imageId: "android/static-assets/icons/big_rx.png",
								},
							},
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Pizza.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹59",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/pizza-hut-old-mla-quarters-roa-himayat-nagar-rest437301",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "189032",
			name: "Burger King",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/c3a5815a-56c1-45da-b298-a0e7576802ac_189032.jpg",
			locality: "Khairatabad",
			areaName: "Khairatabad",
			costForTwo: "₹350 for two",
			cuisines: ["Burgers", "American"],
			avgRating: 4.1,
			parentId: "166",
			avgRatingString: "4.1",
			totalRatingsString: "14K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4.2,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "4.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-04 05:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹139",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "4.7",
					ratingCount: "1.2K+",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/burger-king-khairatabad-rest189032",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "24613",
			name: "Domino's Pizza",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/3a1d6fd3-4798-4b47-b834-99a372d52af5_24613.JPG",
			locality: "Stock Exchange Road",
			areaName: "Himayath Nagar",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
			avgRating: 4.4,
			parentId: "2456",
			avgRatingString: "4.4",
			totalRatingsString: "21K+",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-03 23:59:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "android/static-assets/icons/big_rx.png",
						description: "bolt!",
					},
					{
						imageId: "Rxawards/_CATEGORY-Pizza.png",
						description: "Delivery!",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "bolt!",
									imageId: "android/static-assets/icons/big_rx.png",
								},
							},
							{
								attributes: {
									description: "Delivery!",
									imageId: "Rxawards/_CATEGORY-Pizza.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹165 OFF",
				subHeader: "ABOVE ₹999",
				discountTag: "FLAT DEAL",
				headerTypeV2: 12,
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "3.9",
					ratingCount: "2.5K+",
				},
				source: "GOOGLE",
				sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/dominos-pizza-stock-exchange-road-himayath-nagar-rest24613",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "108986",
			name: "NIC Ice Creams",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/c17b5848-b856-46bb-97b5-0dc437da4f3f_108986.JPG",
			locality: "KMIT",
			areaName: "Narayanguda",
			costForTwo: "₹120 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.6,
			veg: true,
			parentId: "6249",
			avgRatingString: "4.6",
			totalRatingsString: "23K+",
			sla: {
				deliveryTime: 17,
				lastMileTravel: 2.2,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "2.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-03 23:00:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "android/static-assets/icons/big_rx.png",
						description: "bolt!",
					},
				],
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "brand",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "bolt!",
									imageId: "android/static-assets/icons/big_rx.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "brand",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "ITEMS",
				subHeader: "AT ₹148",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/nic-ice-creams-kmit-narayanguda-rest108986",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
		info: {
			id: "233055",
			name: "The Good Bowl",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/d154a250-4cd7-4530-b209-ddc09d952b14_233055.jpg",
			locality: "Beside Little Flower Primary school",
			areaName: "Abids",
			costForTwo: "₹400 for two",
			cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
			avgRating: 4.2,
			parentId: "7918",
			avgRatingString: "4.2",
			totalRatingsString: "1.7K+",
			sla: {
				deliveryTime: 22,
				lastMileTravel: 1.8,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "1.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2025-07-03 23:59:00",
				opened: true,
			},
			badges: {
				imageBadges: [
					{
						imageId: "android/static-assets/icons/big_rx.png",
						description: "bolt!",
					},
				],
				textExtendedBadges: [
					{
						iconId: "guiltfree/GF_Logo_android_3x",
						shortDescription: "options available",
						fontColor: "#7E808C",
					},
				],
			},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {
						badgeObject: [
							{
								attributes: {
									description: "bolt!",
									imageId: "android/static-assets/icons/big_rx.png",
								},
							},
						],
					},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: "",
									fontColor: "#7E808C",
									iconId: "guiltfree/GF_Logo_android_3x",
									shortDescription: "options available",
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "₹165 OFF",
				subHeader: "ABOVE ₹499",
				discountTag: "FLAT DEAL",
				headerTypeV2: 12,
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
			externalRatings: {
				aggregatedRating: {
					rating: "--",
				},
			},
			ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
		},
		analytics: {
			context: "seo-data-b7d97515-9261-4870-aaca-396886b1b1a6",
		},
		cta: {
			link: "https://www.swiggy.com/city/hyderabad/the-good-bowl-beside-little-flower-primary-school-abids-rest233055",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

const RestaurantCard = ({ resData }) => {
	const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
		resData?.info || {};
	return (
		<div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
			<img
				className="res-logo"
				alt={name}
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			/>
			<h3>{name}</h3>
			<h4>{cuisines?.join(", ") || "No cuisines listed"}</h4>
			<h4>{avgRating} stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{sla?.deliveryTime} mins</h4>
		</div>
	);
};

const Main = () => {
	return (
		<main className="body">
			<div className="search">search</div>
			<div className="res-container">
				{restaurantList.map((restaurant) => {
					return (
						<RestaurantCard key={restaurant.info.id} resData={restaurant} />
					);
				})}
			</div>
		</main>
	);
};

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Main />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
