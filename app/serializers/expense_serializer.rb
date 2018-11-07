class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :kind, :amount, :description, :payment_type, :date
end
