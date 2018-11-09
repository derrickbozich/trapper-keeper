class Expense < ApplicationRecord
  def self.calc_expenses
    total = 0
    Expense.all.each do |expense|
      total += expense.amount
    end
    {expenses: total}
  end
end
