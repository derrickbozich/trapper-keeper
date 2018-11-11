class ExpensesController < ApplicationController
  def create
    @expense = Expense.create(expense_params)
    @current_user.expenses << @expense
    render json: @expense, status: 201
  end

  def index
    @expenses = Expense.all
    render json: @expenses, status: 200
  end

  def update
    @expense = Expense.find_by_id(params['expense']['id'])
    @expense.update(expense_params)
    render json: @expense, status: 200
  end

  def destroy
    @expense = Expense.find_by_id(params['expense']['id'])
    @expense_id = @expense.id
    @expense.destroy
    render json: @expense_id, status: 202
  end

  private

  def expense_params
    params.require(:expense).permit(:kind, :amount, :payment_type, :description, :date, :id)
  end
end
