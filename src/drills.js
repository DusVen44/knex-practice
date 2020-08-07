require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

//Function to see all items contating text
function getItemsWithText(searchTerm) {
    knexInstance
        .select('id', 'item_name', 'price', 'date_added', 'category')
        .from('shopping_list')
        .where('item_name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result)
        })
}

//getItemsWithText('fish')

//Paginate items
function paginateItems(pageNumber) {
    const itemsPerPage = 6;
    const offset = itemsPerPage * (pageNumber - 1);
    knexInstance
        .select('item_name', 'price', 'category')
        .from('shopping_list')
        .limit(itemsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}

//paginateItems(2)

//Get items after date
function getItemsAfter(daysAgo) {
    knexInstance
        .select('id', 'item_name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .where(
            'date_added',
            '>',
            knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
        )
        .then(results => {
            console.log('PRODUCTS ADDED DAYS AGO', results)
        })
}

//getItemsAfter(5);

//Get total cost of a category
function costPerCategory() {
    knexInstance
      .select('category')
      .sum('price as total')
      .from('shopping_list')
      .groupBy('category')
      .then(result => {
        console.log('COST PER CATEGORY')
        console.log(result)
      })
  }
  
costPerCategory()