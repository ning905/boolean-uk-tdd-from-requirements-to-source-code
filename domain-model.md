// Add your domain model below
Nouns: supermarket shopper, items, checkout items, total cost, items in my basket

Verbs: pay, know

Methods: getTotalCost(basket)
Inputs: basket(@item[])
Data: item(@object), properties: name(@string), price(@number), quantity(@number)
Scenario 1: If there are no items in basket
Output 1: 0(@number)
Scenario 2: If there are items in basket
Output 2: totalCost(@number)


Nouns: organised individual, shopping habits, receipt, line items (quantity, name, cost), total cost

Verbs: evaluate, see

Methods: createReceipt(basket)
Inputs: basket(@item[])
Data: item(@object), properties: name(@string), price(@number), quantity(@number)
Scenario 1: If there are no items in basket
Output 1: (@string, 'No items found')
Scenario 2: If there are items in basket
Output 2: receipt([@item[], totalCost(@number)])
