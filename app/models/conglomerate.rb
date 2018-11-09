class Conglomerate < ApplicationRecord
  def self.get_totals
    merch = Cart.calc_merch
    door = Show.calc_door
    expenses = Expense.calc_expenses
    gross_income = {gross_income: (door[:gross_door]  + merch[:gross_merch]).to_i }
    net_income = {net_income: (door[:net_door]  + merch[:net_merch]).to_i }
    merch.merge(door).merge(gross_income).merge(expenses).merge(net_income)
  end

  def self.get_data
    items = Item.all
    expenses = Expense.all
    carts = Cart.all
    sales = Cart.get_daily_merch_sales
    shows = Show.all
    totals = Conglomerate.get_totals

    {items: items, expenses: expenses, carts: carts, sales: sales, shows: shows, totals: totals}
  end
end
