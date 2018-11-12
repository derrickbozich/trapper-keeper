import ItemForm from './containers/ItemForm'
import ExpensesForm from './containers/ExpensesForm'
import ShowsForm from './containers/ShowsForm'
import ShoppingPage from './components/ShoppingPage'
import ItemsPage from './containers/ItemsPage'
import FinancePage from './containers/FinancePage'
import ShowsPage from './containers/ShowsPage'
import LoginForm from './containers/LoginForm'
import SignUpForm from './containers/SignUpForm'
import ImageUpload from './containers/ImageUpload'
import Checkout from './components/Checkout'
import NavBar from './components/NavBar'

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
 {path: '/uploads', component: ImageUpload }
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
