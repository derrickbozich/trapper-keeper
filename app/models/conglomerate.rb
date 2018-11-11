class Conglomerate < ApplicationRecord
  def self.get_totals(id)
    merch = Cart.calc_merch(id)
    door = Show.calc_door(id)
    expenses = Expense.calc_expenses(id)
    gross_income = {gross_income: (door[:gross_door]  + merch[:gross_merch]).to_i }
    net_income = {net_income: (door[:net_door]  + merch[:net_merch] - expenses[:expenses]).to_i }
    merch.merge(door).merge(gross_income).merge(expenses).merge(net_income)
  end

  def self.get_data(id)
    @current_user = User.find_by_id(id)
    items = @current_user.items
    expenses = @current_user.expenses
    carts = @current_user.carts
    sales = Cart.get_daily_merch_sales(id)
    shows = @current_user.shows
    totals = Conglomerate.get_totals(id)

    {items: items, expenses: expenses, carts: carts, sales: sales, shows: shows, totals: totals}
  end
end
