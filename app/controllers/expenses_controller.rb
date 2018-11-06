class ExpensesController < ApplicationController
  def create
    @expense = Expense.create(expense_params)
    render json: @expense, status: 201
  end

  private

  def expense_params
    params.require(:expense).permit(:name, :price, :wholesale_price, :style)
  end
end
