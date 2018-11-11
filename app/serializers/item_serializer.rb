class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :kind, :wholesale_price
  belongs_to :user
end
