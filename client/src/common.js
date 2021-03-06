import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import ShoppingPage from './components/ShoppingPage'
import ItemsPage from './containers/ItemsPage'
import FinancePage from './containers/FinancePage'
import ShowsPage from './containers/ShowsPage'
import MerchDetail from './containers/MerchDetail'
import MerchSales from './containers/MerchSales'
import Door from './containers/Door'
import Expenses from './containers/Expenses'
// import Totals from './containers/Totals'
import LoginForm from './containers/LoginForm'
import SignUpForm from './containers/SignUpForm'
import ImageUpload from './containers/ImageUpload'
import Checkout from './components/Checkout'
import DefaultPage from './components/DefaultPage'
import Home from './components/Home'
// import NavBar from './components/NavBar'
// import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

export function random(){
  return Math.floor(Math.random()*1000000000)
}

export const routes = [
 {path: '/items/new', component: ItemForm },
 {path: '/expenses/new', component: ExpensesForm },
 {path: '/sales/new', component: ShoppingPage },
 {path: '/checkout', component: Checkout },
 {path: '/finances', component: FinancePage },
 {path: '/shows/new', component: ShowsForm },
 {path: '/items', component: ItemsPage },
 {path: '/shows', component: ShowsPage },
 {path: '/register', component: SignUpForm },
 {path: '/users/login', component: LoginForm },
 {path: '/uploads', component: ImageUpload },
 {path: '/merchDetail', component: MerchDetail },
 {path: '/merchSales', component: MerchSales },
 {path: '/expenses', component: Expenses },
 {path: '/door', component: Door },
 {path: '/', component: Home }
]
export const fakeRoutes = [
 {path: '/items/new', component: DefaultPage },
 {path: '/expenses/new', component: DefaultPage },
 {path: '/sales/new', component: DefaultPage },
 {path: '/checkout', component: DefaultPage },
 {path: '/finances', component: DefaultPage },
 {path: '/shows/new', component: DefaultPage },
 {path: '/items', component: DefaultPage },
 {path: '/shows', component: DefaultPage },
 {path: '/register', component: SignUpForm },
 {path: '/users/login', component: LoginForm },
 {path: '/uploads', component: DefaultPage },
 {path: '/merchDetail', component: DefaultPage },
 {path: '/merchSales', component: DefaultPage },
 {path: '/expenses', component: DefaultPage },
 {path: '/door', component: DefaultPage },
 {path: '/', component: Home }
]

export const expenseOptions = [
  { key: 'food', value: 'food', text: 'Food' },
  { key: 'gas', value: 'gas', text: 'Gas' },
  { key: 'tolls-parking', value: 'tolls-parking', text: 'Tolls/Parking' },
  { key: 'housing', value: 'housing', text: 'Housing' },
  { key: 'equipment', value: 'equipment', text: 'Equipment' },
  { key: 'fun', value: 'fun', text: 'Fun' },
  { key: 'car-maintenance', value: 'car-maintenance', text: 'Car Maintenance' },
  { key: 'other', value: 'other', text: 'Other' },
]

export const paymentTypes = [
  { key: 'cash', value: 'cash', text: 'Cash' },
  { key: 'credit', value: 'credit', text: 'Credit' }
]

export const date = () => {
  let d = new Date()
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
}

export const mobileRightItems = [
  { as: "a", content: "Login", to: "/users/login" },
  { as: "a", content: "Sign Up", to: "/register" }
]

export const loggedInMobileRightItems = [
  { as: "a", content: "New Expense", to: "/expenses/new" },
  { as: "a", content: "Finances", to: "/finances" },
  { as: "a", content: "New Sale", to: "/sales/new" },
  { as: "a", content: "New Show", to: "/shows/new" },
  { as: "a", content: "New Item", to: "/items/new" },
  { as: "a", content: "Items", to: "/items" }
]

export const leftItems = [

];

export const loggedInLeftItems = [
  { as:{ Link }, content: "Finances", to: "/finances" },
  { as:{ Link }, content: "New Sale", to: "/sales/new" },
  { as: "a", content: "New Expense", to: "/expenses/new" },
  { as: "a", content: "Shows", to: "/shows" },
  { as: "a", content: "New Show", to: "/shows/new" },
  { as: "a", content: "Items", to: "/items" },
  { as: "a", content: "New Item", to: "/items/new" },
];
export const rightItems = [
  { as: "a", content: "Login", to: "/users/login" },
  { as: "a", content: "Register", to: "/register" }
];

export const loggedInRightItems = [

];

export const stateOptions =
              [ { key: 'AK', value: 'AK', text: 'Alaska' },
                { key: 'AL', value: 'AL', text: 'Alabama'},
                { key: 'AR', value: 'AR', text: 'Arkansas'},
                { key: 'AS', value: 'AS', text: 'American Samoa'},
                { key: 'AZ', value: 'AZ', text: 'Arizona'},
                { key: 'CA', value: 'CA', text: 'California'},
                { key: 'CO', value: 'CO', text: 'Colorado'},
                { key: 'CT', value: 'CT', text: 'Connecticut'},
                { key: 'DC', value: 'DC', text: 'District of Columbia'},
                { key: 'DE', value: 'DE', text: 'Delaware'},
                { key: 'FL', value: 'FL', text: 'Florida'},
                { key: 'GA', value: 'GA', text: 'Georgia'},
                { key: 'GU', value: 'GU', text: 'Guam'},
                { key: 'HI', value: 'HI', text: 'Hawaii'},
                { key: 'IA', value: 'IA', text: 'Iowa'},
                { key: 'ID', value: 'ID', text: 'Idaho'},
                { key: 'IL', value: 'IL', text: 'Illinois'},
                { key: 'IN', value: 'IN', text: 'Indiana'},
                { key: 'KS', value: 'KS', text: 'Kansas'},
                { key: 'KY', value: 'KY', text: 'Kentucky'},
                { key: 'LA', value: 'LA', text: 'Louisiana'},
                { key: 'MA', value: 'MA', text: 'Massachusetts'},
                { key: 'MD', value: 'MD', text: 'Maryland'},
                { key: 'ME', value: 'ME', text: 'Maine'},
                { key: 'MI', value: 'MI', text: 'Michigan'},
                { key: 'MN', value: 'MN', text: 'Minnesota'},
                { key: 'MO', value: 'MO', text: 'Missouri'},
                { key: 'MS', value: 'MS', text: 'Mississippi'},
                { key: 'MT', value: 'MT', text: 'Montana'},
                { key: 'NC', value: 'NC', text: 'North Carolina'},
                { key: 'ND', value: 'ND', text: 'North Dakota'},
                { key: 'NE', value: 'NE', text: 'Nebraska'},
                { key: 'NH', value: 'NH', text: 'New Hampshire'},
                { key: 'NJ', value: 'NJ', text: 'New Jersey'},
                { key: 'NM', value: 'NM', text: 'New Mexico'},
                { key: 'NV', value: 'NV', text: 'Nevada'},
                { key: 'NY', value: 'NY', text: 'New York'},
                { key: 'OH', value: 'OH', text: 'Ohio'},
                { key: 'OK', value: 'OK', text: 'Oklahoma'},
                { key: 'OR', value: 'OR', text: 'Oregon'},
                { key: 'PA', value: 'PA', text: 'Pennsylvania'},
                { key: 'PR', value: 'PR', text: 'Puerto Rico'},
                { key: 'RI', value: 'RI', text: 'Rhode Island'},
                { key: 'SC', value: 'SC', text: 'South Carolina'},
                { key: 'SD', value: 'SD', text: 'South Dakota'},
                { key: 'TN', value: 'TN', text: 'Tennessee'},
                { key: 'TX', value: 'TX', text: 'Texas'},
                { key: 'UT', value: 'UT', text: 'Utah'},
                { key: 'VA', value: 'VA', text: 'Virginia'},
                { key: 'VI', value: 'VI', text: 'Virgin Islands'},
                { key: 'VT', value: 'VT', text: 'Vermont'},
                { key: 'WA', value: 'WA', text: 'Washington'},
                { key: 'WI', value: 'WI', text: 'Wisconsin'},
                { key: 'WV', value: 'WV', text: 'West Virginia'},
                { key: 'WY', value: 'WY', text: 'Wyoming'}]
