class CartSerializer < ActiveModel::Serializer
  attributes :id, :date, :total, :wholesale_total, :square_total, :payment_type
end
