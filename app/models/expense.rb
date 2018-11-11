class Expense < ApplicationRecord
  belongs_to :user

  def self.calc_expenses(id)
    @current_user = User.find_by_id(id)
    total = 0
    @current_user.expenses.each do |expense|
      total += expense.amount
    end
    {expenses: total}
  end
end
