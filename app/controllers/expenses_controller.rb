class ExpensesController < ApplicationController
  def create
    @expense = Expense.create(expense_params)
    render json: @expense, status: 201
  end

  def index
    @expenses = Expense.all
    render json: @expenses, status: 200
  end

  private

  def expense_params
    params.require(:expense).permit(:kind, :amount, :payment_type, :description, :date)
  end
end
